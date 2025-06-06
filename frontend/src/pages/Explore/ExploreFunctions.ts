import { defaultExploreQuery, defaultExploreType } from "../../defaults";

export const setExploreType = (type: string | null) => {
  const lowercaseType = type?.toLocaleLowerCase();
  let exploreTypeOptions = [
    "wrestler",
    "title",
    "company",
    "event",
    "match",
    "faction",
    "module",
    "dataring",
  ];

  if (!lowercaseType) {
    return defaultExploreType;
  }

  if (exploreTypeOptions.includes(lowercaseType)) {
    return lowercaseType;
  }

  return defaultExploreType;
};

export const setExploreQuery = (query: string | null) => {
  if (!query) {
    return defaultExploreQuery;
  }

  return decodeURIComponent(query);
};

export const setExploreQuerySearch = (query: string) => {
  return encodeURIComponent(query);
};
