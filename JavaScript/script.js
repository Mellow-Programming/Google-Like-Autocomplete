const search_input = document.querySelector("#search-input")
const results_container = document.querySelector(".results-section")
const results_ul = document.querySelector(".results > ul")

const db = [
  "web",
  "web developer",
  "javascript",
  "html",
  "css",
  "json",
  "react",
  "js"
]


search_input.addEventListener("keyup", (event) => {
  const search_input_value = event.target.value
  if (search_input_value) {
    results_ul.innerHTML = ""
    let search_results_array = search_in_db(search_input_value)
    generate_result_item(search_results_array)
    results_container.classList.add("acitivate")
    
    
  } else {
    results_container.classList.remove("acitivate")
    results_ul.innerHTML = ""
    
  }
  
})

function search_in_db(input) {
  let response = db.filter((r) => {
    return r.startsWith(input)
    
  })
  return response
}
function generate_result_item(arr) {
  let list_item
  arr.forEach((item) => {
    list_item = document.createElement("li")
    list_item.innerHTML = item
    list_item.addEventListener("click", () => {
      results_ul.innerHTML = ""
      search_input.value = item
      results_container.classList.remove("acitivate")
      
    })
    results_ul.appendChild(list_item)
    
    
  })
  
}