<script setup>

</script>

<template>
    <div class="shortcut">
        <div class="w">
            <ul>
                <li><a href="">请先登录</a></li>
                <li class="line"></li>
                <li><a href="">请先登录</a></li>
                <li class="line"></li>
                <li><a href="">请先登录</a></li>
                <li class="line"></li>
                <li><a href="">请先登录</a></li>
                <li class="line"></li>
                <li><a href="">请先登录</a></li>
                <li class="line"></li>
                <li><a href="">请先登录</a></li>
                <li class="line"></li>
                <li><a href="">请先登录</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang = "scss">
.w {
    width: 1240px;
    margin: 0 auto;
}
.shortcut {
    background-color: #333;
    height: 52px;
}
.shortcut ul {
    height: 52px;
    display: flex;
    justify-content: right;
    align-items: center;
}
.shortcut ul .line{
    height: 14px;
    border: 1px solid #999;
    margin: 0 15px;
}
.shortcut li a {
    color: #fff;
}
.shortcut li a:hover {
    color: greenyellow;
}
</style>
