import { filterData } from "../../@types";
import { Supabase } from "../../supabase";

const useTableUpdate = (tabelName: string) => {
  const updateRow = async (payload: any, filters?: filterData[]) => {
    try {
      const updateQuery = Supabase.from(tabelName).update(payload);

      if (filters) {
        filters.forEach((filter) => {
          updateQuery.filter(filter.columnName, filter.operator, filter.value);
        });
      }

      const { error } = await updateQuery;
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  return [updateRow];
};

export default useTableUpdate;
