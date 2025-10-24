<script setup>

</script>

<template>
    <div class="header w">
        <div class="logo">
            <h1>
                <a href=""></a>
            </h1>
        </div>
        <div class="list">
            <ul>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">搜索</a></li>
            </ul>
        </div>
        <div class="search">
            <input type="text" placeholder="搜一搜">
        </div>
        <div class="car">4</div>
    </div>
</template>

<style scoped lang = "scss">
.w {
    width: 1240px;
    margin: 0 auto;
}
.header {
    height: 132px;
    background-color: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        width: 200px;
        height: 88px;
        h1 {
            width: 100%;
            height: 100%;
            a {
                display: block;
                height: 100%;
                width: 100%;
                background: url('@/assets/images/11.PNG') no-repeat center;
            }
        }
    }
    .list {
        ul {
            display: flex;
            gap: 48px;
            li {
                a {
                    display: block;
                    height: 40px;
                    line-height: 40px;
                }
                a:hover {
                    border-bottom: 1px solid #5EB69C;
                    color: #5EB69C;
                }
            }
        }
    }
    .search {
        input {
            width: 170px;
            height: 40px;
            padding-left: 28px;
        }
        input::placeholder {
            font-size: 16px;
            color: #ccc;
        }
    }
}
</style>