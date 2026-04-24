"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";

const TIME_SLOTS = [
  "8:00 AM", "8:30 AM",
  "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM",
];

interface Booking {
  name: string;
  partySize: string;
  date: string;
  time: string;
}

const inputClass = [
  "w-full h-11 px-4 rounded-sm font-body text-sm text-espresso",
  "bg-milk border border-espresso/15 placeholder:text-espresso/40",
  "focus:outline-none focus:border-caramel/50 focus:ring-2 focus:ring-caramel/10",
  "transition-all duration-150",
].join(" ");

const labelClass = "block font-body text-sm font-medium text-espresso mb-1.5";

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setBooking(null);
  };

  /* Lock body scroll when open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBooking({
      name: fd.get("name") as string,
      partySize: fd.get("partySize") as string,
      date: fd.get("date") as string,
      time: fd.get("time") as string,
    });
  };

  /* Format date for display */
  function formatDate(dateStr: string) {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }

  return (
    <>
      <Button variant="secondary" size="lg" onClick={open}>
        Reserve a Table
      </Button>

      {isOpen && (
        /* Overlay */
        <div
          className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Panel */}
          <div className="bg-cream rounded-card p-8 w-full max-w-md shadow-lifted relative">
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-espresso/40 hover:text-espresso hover:bg-espresso/8 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {booking ? (
              /* ── Success state ── */
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-2xl text-espresso mb-2">
                  You&apos;re booked in!
                </h2>
                <p className="font-body text-espresso/60 text-sm leading-relaxed mb-6">
                  We&apos;ll have a table ready for you. See you soon.
                </p>
                <div className="bg-milk rounded-card p-5 text-left space-y-3 mb-8">
                  {[
                    { label: "Name", value: booking.name },
                    { label: "Party size", value: `${booking.partySize} ${parseInt(booking.partySize) === 1 ? "guest" : "guests"}` },
                    { label: "Date", value: formatDate(booking.date) },
                    { label: "Time", value: booking.time },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-baseline gap-4">
                      <span className="font-body text-xs text-espresso/40 uppercase tracking-widest flex-shrink-0">{label}</span>
                      <span className="font-body text-sm text-espresso font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="md" onClick={close} className="w-full justify-center">
                  Done
                </Button>
              </div>
            ) : (
              /* ── Booking form ── */
              <>
                <div className="mb-6">
                  <p className="font-body text-xs text-caramel uppercase tracking-widest mb-1">Brew & Co.</p>
                  <h2 className="font-display font-bold text-2xl text-espresso">Reserve a Table</h2>
                  <p className="font-body text-sm text-espresso/55 mt-1">Walk-ins always welcome too.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Jane Smith"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="partySize" className={labelClass}>Party Size</label>
                    <select
                      id="partySize"
                      name="partySize"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>Select number of guests</option>
                      {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className={labelClass}>Date</label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={today}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className={labelClass}>Time</label>
                      <select
                        id="time"
                        name="time"
                        required
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>Select time</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="w-full justify-center mt-2">
                    Confirm Reservation
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
