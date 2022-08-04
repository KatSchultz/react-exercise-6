export interface Quote {
  text: string;
  author: string;
}

export interface Periods {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: null;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export interface WeatherResponse {
  context: [];
  type: string;
  geometry: Geometry[];
  properties: Properties[];
}

export interface Geometry {
  type: string;
  coordinates: [[]];
}

export interface Elevation {
  unitCode: string;
  value: number;
}

export interface Properties {
  updated: string;
  units: string;
  forecastGenerator: string;
  generatedAt: string;
  updateTime: string;
  validTimes: string;
  elevation: Elevation[];
  periods: Periods[];
}
