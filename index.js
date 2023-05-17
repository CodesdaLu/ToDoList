const botao = document.getElementById('add');
const itms =  document.getElementById('items');
const item_template = document.getElementById('item-template');




let items = getItems();


function getItems(){
    const value = localStorage.getItem("todo-test") || "[]";
    
    
    return JSON.parse(value);
}


function setItems(items){
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo-test", itemsJson);
}


function updateItem (item, key, value) {
    item[key] = value;

    setItems(items);
    refreshList();
}



function addItem () {
    items.unshift({
        description: "",
        completed: false
    });
    

    setItems(items);
    refreshList();
}


function refreshList(){

    itms.innerHTML = "";

    for(const item of items){
        const itemElement = item_template.content.cloneNode(true);
        const descriptionInput = itemElement.getElementById("txt");
        const completedInput = itemElement.querySelector(".item-complete");


        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value)
        })

        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);
        })

        
        
        
        
        
        
        itms.append(itemElement);
    }
}



botao.addEventListener('click', ()=>{
    addItem();
    refreshList();
    
})
