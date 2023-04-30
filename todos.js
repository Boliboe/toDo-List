const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo =>{

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <svg class="w-5 ml-2 delete" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        </li>`;

        list.innerHTML += html;
};

addForm.addEventListener('submit',e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // console.log(todo);
    if(todo.length){
       generateTemplate(todo);
       addForm.reset();
    }
    
});

// delete todos
list.addEventListener('click', e =>{

    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos =(term) =>{

Array.from(list.children)
.filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.add('filtered'));

Array.from(list.children)
.filter((todo) =>  todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.remove('filtered'));
};

// keyup event 
search.addEventListener('keyup',() => {
const term = search.value.trim().toLowerCase();
filterTodos(term);
});