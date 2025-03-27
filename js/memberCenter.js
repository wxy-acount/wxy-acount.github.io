
            //抽奖人
            let nameArr = ["王新雨", "雪", "高文旭", "会", "李兆磊", "嫂子", "刘朋承", "吕嘉睿"];
            let startIntVal;
            let winner = document.getElementById("winner");
            let start = document.getElementById("start");
            //获取元素
            function $(selectors) {
                return document.querySelector(selectors);
            }
            //获取元素样式
            function getStyle(dom, attr) {
                return window.getComputedStyle(dom, false)[attr];
            }
            //生成随机数
            function randomNum(max) {
                return Math.floor(max * Math.random() / 1);
            }
            //随机抽取获奖人
            function randomName(dom) {
                let len = nameArr.length;
                let val = nameArr[randomNum(len)];
                dom.innerHTML = val;
            }
            let flag = 1;
            //防止重复点击
            let name1 = $(".name1");
            let name2 = $(".name2");
            let name3 = $(".name3");
            start.addEventListener("click", function() {
                if (flag) {
                    //开始
                    flag = 0;
                    stopNum = 5;
                    start.innerHTML = "停止";
                    winner.className = "luckyName";
                    randomName(name1);
                    //随机名字
                    randomName(name2);
                    randomName(name3);
                    //开始抽奖动画
                    startIntVal = setInterval("action(8)", 125);
                } else {
                    //结束
                    setTimeout(function() {
                        slowStop();
                        //1s后执行
                    }, 1000)

                }
            }, false);
            //缓慢结束动画
            let stopNum = 5;
            function slowStop() {
                clearInterval(startIntVal);
                //清除动画定时
                if (stopNum > 0) {
                    setTimeout(function() {
                        if (stopNum < 3) {
                            //减速
                            action(2);
                            startIntVal = setInterval("action(2)", 500);
                        } else {
                            action(4);
                            startIntVal = setInterval("action(4)", 250);
                        }
                    }, 225);
                    //切换速度
                    setTimeout(function() {
                        stopNum -= 2;
                        slowStop();
                    }, 2000);
                } else {
                    //结束
                    flag = 1;
                    start.innerHTML = "开始";
                    winner.className = "luckyName ok";
                }

            }

            //动画
            //top
            let i = 0;
            //获取top值
            let stepArr = [100, 0, -100];
            function orderTop(num) {
                let index = num % 3;
                return stepArr[index];
            }
            function action(speed) {
                animationF(name1, orderTop(i), speed);
                animationF(name2, orderTop(i + 2), speed);
                animationF(name3, orderTop(i + 1), speed);
                i++;
                //重复循环
            }
            //设置top 动画
            function animationF(dom, target, speed) {
                clearInterval(dom.timer);
                //清除定时器
                //获取当前top
                let cur = parseInt(getStyle(dom, "top"));
                if (cur > target) {
                    speed = -speed;
                }
                if (target == 100) {
                    //重新抽取并设置到底部
                    randomName(dom);
                    dom.style["top"] = "100px";
                    return;
                }
                //定时器动画
                dom.timer = setInterval(function() {
                    let cur = parseInt(getStyle(dom, "top"));
                    if ((speed > 0 && cur >= target) || (speed < 0 && cur <= target)) {
                        //动画结束
                        clearInterval(dom.timer);
                    } else {
                        //移动位置
                        dom.style["top"] = cur + speed + "px";
                    }
                }, 10)

            }