const cron = require('node-cron');

const sceduler = async (req, res) => {
    try {
        let { text, dateTime } = req.body;

        let dateTimeArr = dateTime.split(" ")
        let date = dateTimeArr[0].split("-").map(Number)
        let time = dateTimeArr[1].split(":").map(Number)

        let s = time[2], m = time[1], h = time[0], mo = date[1], d = date[2]


        cron.schedule(`${s} ${m} ${h} ${d} ${mo} *`, () => {
            setTimeout(() => {
                const reversedText = text.split('').reverse().join('');
                console.log(reversedText)
            }, text.length * 1000)
        })

        res.status(200).send(`Event scheduled for text: "${text}" at ${dateTime}`);

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = { sceduler }
