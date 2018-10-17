// 这一模块是控制器
//控制器的职责: 实现的cb函数
// 要的结果就是数据库操作返回的结果



const m_user = require('../models/m_user');


//渲染登录页
exports.showSignin = (req, res) => {
    // res.send('控制器中的函数');
    // res.render('../views/signin.html')
    //   render()这个方法会自动去 ../views 这个文件里面找
    res.render('signin.html');
};

//登录表单提交
exports.handleSignin = (req, res) => {
    // res.render()
    // console.log('和客户端');

    //获取表单数据
    const body = req.body;
    // console.log(body); //{ email: 'admin@itcast.cn', password: '123' }
    
    m_user.checkEmail(body.email, (err, data) => {

        if(err) {
            // throw err;
            return res.send({
                code: 500,
                message: '服务器错误'
            });
        }
     
        //如果邮箱不存在
        if(!data[0]) {
            // return res.send('邮箱不存在');
            return res.send({
                code: 1,
                message: '邮箱不存在'
            });
        }


        //再验证密码
        if(data[0].password != body.password) {
            // return res.send('密码错误');
            return res.send({
                code: 2,
                message: '密码错误 再想想'
            });
        }
        // res.send('可以登录了');
        //如果都正确, 验证通过
        res.send({
            code: 200,
            message: '验证通过'
        });
        
    });   
};        
    // 如果都正确, 跳转 (这步在signin.html页面写)

    




    // //先验证邮箱
    // const sqlstr = 'select * from `users` where email=?';
    // connection.query(sqlstr, body.email, (err, data) => {
    //     if(err) {
    //         throw err;
    //     }
    //     // console.log(data);
    //     //如果邮箱不存在
    //     if(!data[0]) {
    //         // return res.send('邮箱不存在');
    //         return res.send({
    //             code: 1,
    //             message: '邮箱不存在'
    //         });
    //     }
    //     //再验证密码
    //     if(data[0].password != body.password) {
    //         // return res.send('密码错误');
    //         return res.send({
    //             code: 2,
    //             message: '密码错误 再想想'
    //         });
    //     }
    //     // res.send('可以登录了');
    //     //如果都正确, 跳转
    //     res.send({
    //         code: 200,
    //         message: '验证通过'
    //     });
        
    // })
   

    //如果都正确, 跳转 (这步在signin.html页面写)
    
        
    // })


// 导出所有的包
// exports.showSignin = showSignin;
// exports.handleSignin = handleSignin;

