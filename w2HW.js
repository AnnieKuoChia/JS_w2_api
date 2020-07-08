
document.querySelector('#get').addEventListener('click', getData);
document.querySelector('#post').addEventListener('click', postData);
document.querySelector('#patch').addEventListener('click', patchData);
document.querySelector('#delete').addEventListener('click', deleteData);

var uuid = '903b70bd-963b-4a81-9421-23d8319a40c6';
var token = 'Mi2eiTnJrfAPXYvZj9DnSzqhToxcEv7ohLm3mSUwm0Tj3suJvWy86IBnINpG';//會一直便，如果無法發送資料需要改
var apiPath = 'https://course-ec-api.hexschool.io/';
var sampleData = {
    title: '好茶',
    category: 'tea',
    content: '內容',
    imageUrl: [
        'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
    ],
    enable: true,
    origin_price: 100,
    price: 90,
    unit: '杯',
}

axios.defaults.headers["Authorization"] = `Bearer ${token}`;//作者驗證


function getData(){
    var api = `${apiPath}api/${uuid}/admin/ec/products`;//取得產品列表，product複數
    console.log('getData');
    console.log(api);
    axios.get(api)
        .then (function(res){
            console.log(res);
        })
}

function postData(){
    console.log('postData');
    var api = `${apiPath}api/${uuid}/admin/ec/product`;//新增產品資料，product單數
    console.log(api);
    var data = {
        title: '新增一筆資料',
        category: 'tea',
        content: '內容',
        imageUrl: [
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
        ],
        description: '東方美人茶',
        enable: true,
        origin_price: 100,
        price: 90,
        unit: '杯',
    };
    axios.post(api, data)
        .then (function(res){
            console.log(res);
        })
}

function patchData(){
    console.log('patchData');
    var api = `${apiPath}api/${uuid}/admin/ec/product/EUsRfvxar2prWUXE3jHSoWwDB294JztLSD52QiOrksaLTjDi35kIoxqWYTtR7SnA`;
    console.log(api);
    var data = {
        title: '更新一筆資料',
        category: 'tea',
        content: '內容',
        imageUrl: [
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
        ],
        description: '東方美人茶',
        enable: true,
        origin_price: 100,
        price: 90,
        unit: '杯',
    };
    axios.patch(api, data)
        .then (function(res){
            console.log(res);
        })
}

function deleteData(){
    console.log('patchData');
    var api = `${apiPath}api/${uuid}/admin/ec/product/EUsRfvxar2prWUXE3jHSoWwDB294JztLSD52QiOrksaLTjDi35kIoxqWYTtR7SnA`;
    console.log(api);
    axios.delete(api)
        .then (function(res){
            console.log(res);
        })
}
