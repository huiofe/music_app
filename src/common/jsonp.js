import JSONP from 'jsonp';

export default function jsonp(url,data,options){
    //拼接URL
    function param(data){
        let url = '';
        for(let i = 0; i < data.length; i++){
            let value = data[i] !== undefined ? data[i] : '';
            console.log(i,value);
            url += '&' + i + '=' + encodeURIComponent(value);
        }
        //删除url字符串中的第一个‘&’
        return url ? url.substring(1) : ''
    }

    url = url + (url.indexOf('?') < 0 ? '?' : '&') + param(data);
    return new Promise((resolve,reject) =>{
        JSONP(url,options, (err,data) => {
            if(!err){
                resolve(data);
            }else{
                reject(err);
            }
        })
    });
};
