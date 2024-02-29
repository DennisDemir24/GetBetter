import { supabaseClient } from "@/lib/supabase";

export const getTodos = async ({userId, token}: {userId: string; token: string}) => {
    const supabase = await supabaseClient(token)
    const {data: todos} = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', userId)
    return todos
}

export const getTodoById = async ({userId, token, todoId}: {userId: string; token: string; todoId: string}) => {
    const supabase = await supabaseClient(token)
    const {data: todo} = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', userId)
        .eq('id', todoId)
    return todo
}

export const updateTodo = async ({userId, token, todoId, title, description}: {userId: string; token: string; todoId: string; title: string; description: string}) => {
    const supabase = await supabaseClient(token)
    const {data: todo} = await supabase
        .from('todos')
        .update({title, description})
        .eq('user_id', userId)
        .eq('id', todoId)
    return todo
}

export const deleteTodo = async ({userId, token, todoId}: {userId: string; token: string; todoId: string}) => {
    const supabase = await supabaseClient(token)
    const {data: todo} = await supabase
        .from('todos')
        .delete()
        .eq('user_id', userId)
        .eq('id', todoId)
    return todo
}
