interface Todo {
  userId: number;
  id:number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  }
  catch(e){

  }
}