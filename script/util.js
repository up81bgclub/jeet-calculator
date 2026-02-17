export const multiplication = (wt,rt) => {
    return rt/10 * wt
}

export const making = (amt,percent) => {
    return amt/100 * Number(percent)
}

export const sumValue = (val) => {
    var num = 0
    val.forEach((element) => {
        num += Number(element)
    });
    return num
}

export const gst = (val) => {
    return val/100 * 3
}

export const grandTotal = (a,b) => {
    return a+b
}

export const saveData = (data) => {
    const stored = JSON.parse(localStorage.getItem("ujData")) || [];
    const updated = [...stored, data]
    localStorage.setItem("ujData",JSON.stringify(updated))
}

export const getData = () => {
    return JSON.parse(localStorage.getItem("ujData"))
}

export const singleData = (id) => {
    const stored = JSON.parse(localStorage.getItem("ujData")) || [];
    const data =  stored.filter(item => id === item.id)
    return data
}

export const deleteData = (id) => {
    const stored = JSON.parse(localStorage.getItem("ujData")) || [];
    const data =  stored.filter(item => id !== item.id)
    localStorage.setItem("ujData",JSON.stringify(data))
}