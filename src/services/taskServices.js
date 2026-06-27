import { supabase } from "../createClient";

export const taskServices = {
  selectAll: async () => {
    const { data, error } = await supabase.from("tasks").select("*");

    return { data, error };
  },

  create: async (task) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert({ description: task, concluded: false });
    return { data, error };
  },

  delete: async (id) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    return { error };
  },

  updateDescription: async (id, newDescription) => {
    const { error } = await supabase
      .from("tasks")
      .update({ description: newDescription })
      .eq("id", id);
    return { error };
  },

  updateStatus: async (id, newStatus) => {
    const { error } = await supabase
      .from("tasks")
      .update({ concluded: newStatus })
      .eq("id", id);
    return { error };
  },
};
