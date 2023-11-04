let number = 1;
function Record(date, recording) {
    this.date = date;
    this.recording = recording;
    this.showDiary = () => {
        console.log(`Date: ${this.date}; Recording: ${this.recording}`);
    };
    this.toString = () => {
        return `<tr><td>${number++}</td><td>${this.date}</td><td>${this.recording}</td></tr>`;
    }
}

let now = new Date();
const recordsTable = document.getElementById("recordsTable");

function Diary(diary) {
    this.diary = [
        new Record("11.02.2023", "Hello"),
        new Record("11.03.2023", "Sunny day"),
        new Record("11.04.2023", "Bye")
    ];
    this.showDiary = (records = this.diary) => {
        number = 1;
        for (let i = 0; i < recordsTable.children.length; i++) {
            if (typeof recordsTable.children[i + 1] !== 'undefined') {
                (recordsTable.children[i + 1]).innerHTML = "";
            }
        }
        for (let i = 0; i < records.length; i++) {
            recordsTable.innerHTML += records[i].toString();
        }
    };
    this.sortRecords = (sortBy) => {
        let sortedRecords;
        if (sortBy === 0) {
            let word = prompt("Which word should I sort by?");
            sortedRecords = this.diary.filter((record) => { return record.recording.toLowerCase().includes(word.toLowerCase()) });
        }
        if (sortBy === 1) {
            sortedRecords = this.diary.filter((record) => {
                let date = new Date(record.date);
                return (date.getDay() == 6 || date.getDay() == 0) ? 1 : 0;
            });
        }
        this.showDiary(sortedRecords);
    };
    this.addRecord = () => {
        let date = `${now.getMonth() + 1}.${String(now.getDate()).padStart(2, "0")}.${now.getFullYear()}`;
        let record = prompt("Write something in your diary");
        this.diary.push(new Record(date, record));
    }
}

let diary = new Diary("My Diary");

let addRecord = () => {
    diary.addRecord();
}

let showRecords = () => {
    diary.showDiary();
}

let sortRecordsByWord = () => {
    diary.sortRecords(0);
}

let sortRecordsByWeekend = () => {
    diary.sortRecords(1);
}