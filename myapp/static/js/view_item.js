const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id')


let baseUrl = "http://127.0.0.1:9000/api/"
// const bodyData=[["product_id",productId]]
async function hitApi(endpoint,bodyData=[]) {
  let bodyContent = new FormData();
  for (const i of bodyData) {
    bodyContent.append(i[0], i[1]);
  }
  body= { 
    method: "POST",
    body: bodyContent,
  }
    const url=baseUrl+endpoint
    let response = await fetch(url,body);
    let data = await response.json()
    return data;
}

async function getData() {
    let jsondata = await hitApi("view_item",[["product_id",productId]])
    let jsonData=jsondata.data[0].fields
    if (jsondata.status==="success"){
    $(".name").html(jsonData.name)
    $(".price").html(jsonData.price)
    $(".avlqty").html(jsonData.available_quantity)
    $(".description").html(jsonData.description)
    $(".selectQty").attr("max",jsonData.available_quantity)      
    }else{
      alert(jsondata.message)
    }

}
getData()


$("#addToCart").click(()=>{
    let productQty=$(".selectQty").val()
    let bodyContent = new FormData();
    bodyContent.append("product_id", productId);
    bodyContent.append("product_quantity", productQty);

fetch(baseUrl+"add_to_cart", { 
  method: "POST",
  body: bodyContent,
}).then(function(response) {
  return response.text();
}).then(function(data) {
  console.log(data);
})
})
