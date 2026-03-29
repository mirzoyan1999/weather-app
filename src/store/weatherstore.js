
import { create } from "zustand";

export const useWeatherStore = create((set) => ({
  city: "",
  weather: null,
  loading: false,
  error: null,

  setCity: (city) => set({ city }),

  getWeather: async (cityName) => {
    if (!cityName.trim()) return;

    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `${import.meta.env.VITE_WEATHER_API_URL}current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${cityName}&aqi=no`
      );

      const data = await res.json();

      if (!res.ok) {
        const msg =
          data?.error?.message ||
          (typeof data?.error === "string" ? data.error : null) ||
          `Request failed (${res.status})`;
        set({ weather: null, loading: false, error: msg });
        return;
      }

      set({
        weather: data,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.message || "Something went wrong",
        weather: null,
        loading: false,
      });
    }
  },
}));