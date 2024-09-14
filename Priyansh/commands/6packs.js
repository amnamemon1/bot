module.exports.config = {
  name: "6packs",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ROBIN",
  description: "Random 6-pack photos",
  commandCategory: "Random-IMG",
  usages: "6mui",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/R9mb2d6.jpg",
"https://i.imgur.com/HmDpGbJ.jpg",
"https://i.imgur.com/8QT9gp6.jpg",
"https://i.imgur.com/gggc27P.jpg",
"https://i.imgur.com/fEUM8lM.jpg",
"https://i.imgur.com/56Sreb3.jpg",
"https://i.imgur.com/z8UA5Um.jpg",
"https://i.imgur.com/8GVBIW6.jpg",
"https://i.imgur.com/7Htu5DT.jpg",
"https://i.imgur.com/9SLPUKV.jpg",
"https://i.imgur.com/e4U5Vn4.jpg",
"https://i.imgur.com/vPbQ2Ht.jpg",
"https://i.imgur.com/yAjSU15.jpg",
"https://i.imgur.com/YLPpZez.jpg",
"https://i.imgur.com/37oxZsG.jpg",
"https://i.imgur.com/9KEdMAS.jpg",
"https://i.imgur.com/Aa1mLCK.jpg",
"https://i.imgur.com/noUwCUD.jpg",
"https://i.imgur.com/LfLGFf9.jpg",
"https://i.imgur.com/xQUyXYV.jpg",
"https://i.imgur.com/jPnWf94.jpg",
"https://i.imgur.com/iopMHOA.jpg",
"https://i.imgur.com/z5qp5tf.jpg",
"https://i.imgur.com/SRnN7T7.jpg",
"https://i.imgur.com/ThQ03aI.jpg",
"https://i.imgur.com/BfZVzDD.jpg",
"https://i.imgur.com/iXeO5nt.jpg",
"https://i.imgur.com/91qzXZo.jpg",
"https://i.imgur.com/rTDXMzw.jpg",
"https://i.imgur.com/plgVWrd.jpg",
"https://i.imgur.com/Ujdiy4M.jpg",
"https://i.imgur.com/OGsxRQC.jpg",
"https://i.imgur.com/g0JzxG5.jpg",
"https://i.imgur.com/8a2fLTJ.jpg",
"https://i.imgur.com/LRrXmx3.jpg",
"https://i.imgur.com/W8IhD4v.jpg",
"https://i.imgur.com/XlKZtTH.jpg",
"https://i.imgur.com/cuectq9.jpg",
"https://i.imgur.com/EsyfaJp.jpg",
"https://i.imgur.com/2dAnNgt.jpg",
"https://i.imgur.com/3k2gIq2.jpg",
"https://i.imgur.com/YCEtQxA.jpg",
"https://i.imgur.com/xBLLlqJ.jpg",
"https://i.imgur.com/PqMLIma.jpg",
"https://i.imgur.com/hBF2IN5.jpg",
"https://i.imgur.com/gsqbZn9.jpg",
"https://i.imgur.com/ehsuk0m.jpg",
"https://i.imgur.com/IaTBOdr.jpg",
"https://i.imgur.com/rvClvOK.jpg",
"https://i.imgur.com/noGcAGr.jpg",
"https://i.imgur.com/J6KXb93.jpg",
"https://i.imgur.com/Ru3YTVQ.jpg",
"https://i.imgur.com/flnxBSo.jpg",
"https://i.imgur.com/fyFcuy2.jpg",
"https://i.imgur.com/0ABaNW8.jpg",
"https://i.imgur.com/tFLsUrB.jpg",
"https://i.imgur.com/DwUTmUc.jpg",
"https://i.imgur.com/jt8Sq1k.jpg",
"https://i.imgur.com/fJdrgSM.jpg",
"https://i.imgur.com/gNqCvBe.jpg",
"https://i.imgur.com/qmMqH8g.jpg",
"https://i.imgur.com/zUml2RB.jpg",
"https://i.imgur.com/RJRB3qH.jpg",
"https://i.imgur.com/HZMIvcc.jpg",
"https://i.imgur.com/9q8XZHJ.jpg",
"https://i.imgur.com/F9ElhsA.jpg",
"https://i.imgur.com/uVdX2BA.jpg",
"https://i.imgur.com/dnRTvSk.jpg",
"https://i.imgur.com/CMZ9Pfc.jpg",
"https://i.imgur.com/yy4Fs7x.jpg",
"https://i.imgur.com/yWeAWA2.jpg",
"https://i.imgur.com/dXNkZA3.jpg",
"https://i.imgur.com/E9m93sQ.jpg",
"https://i.imgur.com/kTU2KZH.jpg",
"https://i.imgur.com/dAvulPk.jpg",
"https://i.imgur.com/SCU0Nhk.jpg",
"https://i.imgur.com/4nqZymL.jpg",
"https://i.imgur.com/LUfTN1s.jpg",
"https://i.imgur.com/15LMEKv.jpg",
"https://i.imgur.com/t7urpcr.jpg",
"https://i.imgur.com/tmj9zFk.jpg",
"https://i.imgur.com/Ev46eaK.jpg",
"https://i.imgur.com/tbiCrBl.jpg",
"https://i.imgur.com/wUdMFK0.jpg",
"https://i.imgur.com/KzZDRNm.jpg",
"https://i.imgur.com/5WPneSm.jpg",
"https://i.imgur.com/rzEdDnJ.jpg",
"https://i.imgur.com/o79KFAX.jpg",
"https://i.imgur.com/Q41cf5H.jpg",
"https://i.imgur.com/fJnc4iZ.jpg",
"https://i.imgur.com/NyPaQ7t.jpg",
"https://i.imgur.com/7T2L2my.jpg",
"https://i.imgur.com/4QK9Qy2.jpg",
"https://i.imgur.com/SI8d4TU.jpg",
"https://i.imgur.com/o25oZ16.jpg",
"https://i.imgur.com/U4BrgSK.jpg",
"https://i.imgur.com/i8cMBW2.jpg",
"https://i.imgur.com/cmb6ubS.jpg",
"https://i.imgur.com/Dqpui42.jpg",
"https://i.imgur.com/Y90BLzr.jpg",
"https://i.imgur.com/VjuUbba.jpg",
"https://i.imgur.com/QT7uKiy.jpg",
"https://i.imgur.com/CVQdxAX.jpg",
"https://i.imgur.com/QKQYUsx.jpg",
"https://i.imgur.com/IB29l19.jpg",
"https://i.imgur.com/k5dNPhc.jpg",
"https://i.imgur.com/haa1XJ7.jpg",
"https://i.imgur.com/AVeISTj.jpg",
"https://i.imgur.com/KDkkxVP.jpg",
"https://i.imgur.com/hLVgS6l.jpg",
"https://i.imgur.com/hXNJatS.jpg",
"https://i.imgur.com/UzXsSSp.jpg",
"https://i.imgur.com/we2iAQ7.jpg",
"https://i.imgur.com/JuqU7AS.jpg",
"https://i.imgur.com/vn3vNsi.jpg",
"https://i.imgur.com/aV4WVsq.jpg"
     ];
     var callback = () => api.sendMessage({body:`Agar Tum Gay Nhi Ho To Ye Dekho Six Pack -.-`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };