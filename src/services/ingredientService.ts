import { supabase } from "./supabase";

async function findAll() {
    return await supabase.from("ingredients").select().order("name")
}