
function getExtesibleObject() {
    let obj = {
        extend: function (template) {
            for (var key in template) {
                if(template.hasOwnProperty(key)){
                    var element = template[key];
                    if(typeof element === 'function'){
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element
                    }
                }
            }
        }
    }

    return obj;
}
