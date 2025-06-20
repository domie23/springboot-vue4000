const base = {
    get() {
                return {
            url : "http://localhost:8080/springboota53y0/",
            name: "springboota53y0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboota53y0/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "线上教学平台"
        } 
    }
}
export default base
