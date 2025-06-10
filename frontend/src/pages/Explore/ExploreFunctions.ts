import {
  defaultExploreQuery,
  defaultExploreType,
  exploreTypeOptions,
} from "../../defaults/variables";

export const setExploreType = (type: string | null) => {
  const lowercaseType = type?.toLocaleLowerCase();

  if (!lowercaseType) {
    return defaultExploreType;
  }

  const lowerCaseTypeOptions: string[] = exploreTypeOptions.map((type) =>
    type.toLocaleLowerCase()
  );

  if (lowerCaseTypeOptions.includes(lowercaseType)) {
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

export const typeToPlural = (word: string) => {
  if (word === "match") {
    return word + "es";
  }

  if (word === "company") {
    return "companies";
  }

  return word + "s";
};
