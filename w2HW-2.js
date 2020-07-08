//參考範例程式碼

var obj = {

    //將商品資訊放進obj.data.products
    data: {
      uuid: '903b70bd-963b-4a81-9421-23d8319a40c6',
      products: [],
    },

    
    getData() {
      var vm = this;
      var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;
  
      axios.get(url)
        .then(function (res) {
        vm.data.products = res.data.data;
        vm.render();//取得資料後要更新畫面
      })
    },
    
    //畫面
    render: function() {
      var list = document.getElementById('list');
      var products = this.data.products;//this指向obj
      var str = '';
      products.forEach(function(i) {//陣列中的所有商品資料會依序帶入此函式
        str += `
            <div class="card">
            <img src="${ i.imageUrl[0] }" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${ i.title }</h5>
            <p class="card-text">${ i.content }</p>
            <p class="card-price">${ i.price }</p>
            </div>
            </div>`;
      });
      list.innerHTML = str;
    }
}
  
obj.getData();