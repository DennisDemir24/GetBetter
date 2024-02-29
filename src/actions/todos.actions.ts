import { supabaseClient } from "@/lib/supabase";

export const getTodos = async ({userId, token}: {userId: string; token: string}) => {
    const supabase = await supabaseClient(token)
    const {data: todos, error} = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', userId)

        if (error) {
            console.error('Error fetching todos:', error.message);
            return [];
        }

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

export const postTodo = async ({ userId, token, e }: { userId: string; token: string; e: any }) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('todos')
    .insert({
      user_id: userId,
      todo: e.target[0].value,
      tag: e.target[1].value,
    })
    .select();

  if (error) {
    console.error('Error posting todo:', error.message);
    return null;
  }

  return data;
};

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
