"use client";

import { useState, useRef, useEffect } from "react";

const allowedDays = ["10", "11", "12"];
const month = "10";
const year = "2025";

// Kolory do wykorzystania
const colors = {
  blue: "bg-blue-100 text-blue-700 border-blue-500",
  pink: "bg-pink-100 text-pink-700 border-pink-500",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-500",
};

/**
 * Parsuje ciąg znaków w formacie 24-godzinnym.
 * Obsługuje wariant "HH:MM" (np. "13:25") lub "H.MM" (np. "6.45").
 * Zwraca wartość numeryczną, np. 13.4166... (dla "13:25") albo 6.75 (dla "6.45").
 */
function parseTime24(timeString) {
  // Najpierw zastąpmy kropkę dwukropkiem, żeby ujednolicić parsy
  const normalized = timeString.replace(".", ":"); // "6.45" -> "6:45"
  // Rozbijamy po dwukropku
  const [hourStr, minuteStr] = normalized.split(":");

  const hour = parseInt(hourStr, 10) || 0;
  const minute = parseInt(minuteStr, 10) || 0;
  return hour + minute / 60;
}

// Przykładowe zdarzenia z czasami w systemie 24-godzinnym
const events = [
  {
    day: "10",
    event: [
      {
        time: { start: "6.00", end: "8.15" },
        author: "Autor 1",
        description: "Wykład poranny",
        color: "blue",
      },
      {
        time: { start: "8.15", end: "9.30" },
        author: "Autor 2",
        description: "Spotkanie projektowe",
        color: "pink",
      },
      // Test zdarzenia nachodzącego (overlap)
      {
        time: { start: "9.00", end: "9.45" },
        author: "Autor Overlap",
        description: "Nakładające się wydarzenie",
        color: "indigo",
      },
      {
        time: { start: "13.00", end: "15:30" },
        author: "Autor 3",
        description: "Warsztaty",
        color: "blue",
      },
      {
        time: { start: "18:00", end: "19:30" },
        author: "Autor 4",
        description: "Kolokwium",
        color: "pink",
      },
    ],
  },
  {
    day: "11",
    event: [
      {
        time: { start: "8.00", end: "10:30" },
        author: "Autor 5",
        description: "Laboratoria",
        color: "blue",
      },
      {
        time: { start: "11.00", end: "12:00" },
        author: "Autor 6",
        description: "Wykład główny",
        color: "pink",
      },
      {
        time: { start: "13.00", end: "14:30" },
        author: "Autor 7",
        description: "Seminarium",
        color: "indigo",
      },
      // Kolejny overlap (13:00 - 14:30 już zajęte, a tu 13.45 - 14.15)
      {
        time: { start: "13.45", end: "14.15" },
        author: "Autor Overlap 2",
        description: "Test overlap 2",
        color: "blue",
      },
      {
        time: { start: "15.30", end: "17.00" },
        author: "Autor 8",
        description: "Projekt grupowy",
        color: "pink",
      },
    ],
  },
  {
    day: "12",
    event: [
      {
        time: { start: "7.30", end: "8.30" },
        author: "Autor 9",
        description: "Ćwiczenia praktyczne",
        color: "pink",
      },
      {
        time: { start: "9.00", end: "10.00" },
        author: "Autor 2",
        description: "Wykład inspirujący",
        color: "indigo",
      },
      {
        time: { start: "10.00", end: "11.55" },
        author: "Autor 1",
        description: "Warsztaty dla zaawansowanych",
        color: "blue",
      },
      {
        time: { start: "12.00", end: "13.30" },
        author: "Autor 3",
        description: "Konsultacje",
        color: "blue",
      },
      {
        time: { start: "14:00", end: "15:00" },
        author: "Autor 4",
        description: "Prezentacja projektów",
        color: "pink",
      },
      {
        time: { start: "15.30", end: "18:00" },
        author: "Autor 10",
        description: "Spotkanie organizacyjne",
        color: "indigo",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Pobiera pierwszy dzień danego miesiąca (0 - niedziela, 1 - poniedziałek, ...)
function getFirstDayOfMonth(year, month) {
  return new Date(year, month - 1, 1).getDay();
}

/**
 * Zwraca wydarzenia dla wybranego dnia, jednocześnie odfiltrowując te,
 * które się nakładają (pokrywają się w czasie).
 */
function getEventsForDay(day) {
  const dayEvents = events.find((ev) => ev.day === day)?.event || [];
  const filteredEvents = [];

  for (const ev of dayEvents) {
    const start = parseTime24(ev.time.start);
    const end = parseTime24(ev.time.end);

    // Sprawdzamy, czy nakłada się z jakimś już zaakceptowanym wydarzeniem
    const isOverlap = filteredEvents.some((existing) => {
      const exStart = parseTime24(existing.time.start);
      const exEnd = parseTime24(existing.time.end);
      // Warunek nakładania się: (start < exEnd) && (end > exStart)
      return start < exEnd && end > exStart;
    });

    if (isOverlap) {
      console.log("Nakładające się wydarzenie:", ev);
    } else {
      filteredEvents.push(ev);
    }
  }

  return filteredEvents;
}

export default function CalendarSection() {
  const [selectedDay, setSelectedDay] = useState("10");
  const eventContainerRef = useRef(null);
  const firstDay = getFirstDayOfMonth(year, month);

  // Po zmianie wybranego dnia, przewiń widok do pierwszego zdarzenia dnia (o ile istnieje).
  useEffect(() => {
    const dayEvents = getEventsForDay(selectedDay);
    if (dayEvents.length > 0) {
      const startHour = parseTime24(dayEvents[0].time.start);
      if (eventContainerRef.current) {
        eventContainerRef.current.scrollTop = startHour * 80;
      }
    }
  }, [selectedDay]);

  // Tworzymy tablicę "pustych" dni przed pierwszym dniem miesiąca
  // i właściwe dni miesiąca (tu: 31 w październiku)
  const days = Array.from({ length: firstDay })
    .fill(null)
    .concat(
      Array.from({ length: 31 }, (_, i) => {
        const day = (i + 1).toString().padStart(2, "0");
        return {
          date: `${year}-${month}-${day}`,
          isCurrentMonth: true,
          isAllowed: allowedDays.includes(day),
        };
      }),
    );

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 relative ">
      <div className="grid grid-cols-1  gap-6">
        {/* Panel z kalendarzem (lewa strona) */}
        <div className="w-full ">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {month}.{year}
          </h2>
          <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
            <div>N</div>
            <div>Pn</div>
            <div>Wt</div>
            <div>Śr</div>
            <div>Cz</div>
            <div>Pt</div>
            <div>So</div>
          </div>
          <div className="grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 ring-gray-200">
            {days.map((day, index) =>
              day ? (
                <button
                  key={day.date}
                  type="button"
                  disabled={!day.isAllowed}
                  onClick={() => setSelectedDay(day.date.split("-").pop())}
                  className={classNames(
                    "py-6 hover:bg-gray-100 focus:z-10 flex items-center justify-center rounded-md",
                    day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                    day.isAllowed
                      ? "text-gray-900"
                      : "text-gray-400 cursor-not-allowed",
                    selectedDay === day.date.split("-").pop() &&
                      "bg-black text-white",
                  )}
                >
                  <time dateTime={day.date}>{day.date.split("-").pop()}</time>
                </button>
              ) : (
                <div key={index} className="py-6 bg-gray-50"></div>
              ),
            )}
          </div>
          <div className="mt-4 text-sm font-semibold text-gray-700">
            Zaznaczony dzień: {selectedDay}
          </div>
        </div>

        {/* Oś czasu z wydarzeniami (prawa strona) */}
        <div
          className="flex-1 overflow-auto max-h-[700px] pr-6"
          ref={eventContainerRef}
        >
          <div className="grid grid-cols-12 gap-2 text-xs text-gray-500">
            {/* Lewy "pasek" z godzinami */}
            <div className="col-span-2 text-right pr-2">
              {Array.from({ length: 24 }, (_, i) => (
                <div
                  key={i}
                  className="h-20 flex items-center justify-end pr-2 border-b border-gray-300"
                >
                  {i}:00
                </div>
              ))}
            </div>

            {/* Prawy obszar, w którym wyrenderowane zostaną eventy */}
            <div className="col-span-10 border-l border-gray-300 pl-4 relative h-[1920px]">
              {getEventsForDay(selectedDay).length > 0 ? (
                getEventsForDay(selectedDay).map((event, index) => {
                  const startHour = parseTime24(event.time.start);
                  const endHour = parseTime24(event.time.end);
                  const top = startHour * 80; // 80px na każdą "godzinę"
                  const height = (endHour - startHour) * 80;

                  return (
                    <div
                      key={index}
                      className={classNames(
                        "absolute left-0 w-full p-4 rounded-lg border shadow-md",
                        colors[event.color],
                      )}
                      style={{
                        top: `${top}px`,
                        height: `${height}px`,
                      }}
                    >
                      <p className="text-xs font-semibold">
                        {event.time.start} - {event.time.end}
                      </p>
                      <p className="font-semibold">{event.author}</p>
                      <p className="text-xs">{event.description}</p>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500 text-xs">Brak wydarzeń</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
