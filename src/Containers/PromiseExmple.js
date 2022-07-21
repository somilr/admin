import React, { useEffect } from 'react'

export default function PromiseExmple() {
    const o = () => {
        return "one extcute"
    }

    const t = () => {
        return new Promise((resolve, reject) => {
            resolve("two extcute")
        })
    }

    const th = () => {
        return "three extcute"
    }

    const all = async () => {
        const a = o()
        console.log(a);

        const b = await t()
        console.log(b);

        const c = th()
        console.log(c);
    }



    useEffect(() => {
        all()
    },
    [])

    const Display = (p) => {
        console.log(p)
    }

    const sum = () => {
        let x = 10, y = 5

        let z = x + y
        // console.log(z);
        Display(z)
    }
    sum(Display)

    return (
        <p>Promise Exmple</p>
    )
}
