import {
  ApiGenerationData,
  GenerationData,
} from "../domain/get-generation-data.domain";

export const generationDataAdapter = (
  data: ApiGenerationData
): GenerationData => ({
  from: new Date(data.from),
  to: new Date(data.to),
  generationMix: data.generationmix.map((item) => ({
    fuel: item.fuel,
    percentage: item.perc,
  })),
});
