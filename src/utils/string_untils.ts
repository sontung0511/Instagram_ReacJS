export  class StringUtils  {
    static displayUserName = (str:string) =>{
        return str.replace("#","")
    }
    static formatNumber = (val: number) =>{
        return new Intl.NumberFormat().format(val);
    }
};