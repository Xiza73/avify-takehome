import { api } from "../../../config/api";
import { GetGenerationDataResponse } from "../domain/get-generation-data.domain";

const MODULE = "/generation";

export const getGenerationData = async () => {
  const { data } = await api.get<GetGenerationDataResponse>(MODULE);

  return data;
};
