const vector1 = {
    start: [1, 2],
    end: [5, 6]
}
const vector2 = {
    start: [1, 2],
    end: [10, 11]
}

class Vectors {
    constructor(vector1, vector2) {
        this.vector1 = vector1;
        this.vector2 = vector2;
    }

    getVectorsCoord = ({start, end}) => {
        return {
            x1: start[0],
            x2: start[1],
            y1: end[0],
            y2: end[1],

        }

    }

    sumVector = () => {
        const vectorCoord1 = this.getVectorsCoord(vector1)
        const vectorCoord2 = this.getVectorsCoord(vector2)
        return {
            start:[ vectorCoord1.x1 + vectorCoord2.x1, vectorCoord1.x2 + vectorCoord2.x2 ],
            end: [vectorCoord1.y1 + vectorCoord2.y1, vectorCoord1.y2 + vectorCoord2.y2]
        }
    }

}

const manageVectors = new Vectors(vector1, vector2);

const sum = manageVectors.sumVector();

console.log(sum);