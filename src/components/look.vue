<template>
    <div>
        <h1>看书</h1>
        {{$route.params.name}}
       <button @click="page">跳到look</button>
    </div>
</template>
<script>
export default {
    
    mounted() {
        
        console.log(this.$route.params)
    },
       methods: {
        page(){
            this.$router.push('/page/12');
            
        }
    }
}
</script>