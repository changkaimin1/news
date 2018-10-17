
//模型: 操作数据库并且返回数据库操作的结果

//导入mysql配置的模块
const db = require('../tools/db_config');




exports.checkEmail = function(email, callback) {
    const sqlstr = 'select * from `users` where email=?';
   db.query(sqlstr, email, (err, data) => {
        if(err) {
            return callback(err, null);
        }
        callback(null, data);
    });
}

//



