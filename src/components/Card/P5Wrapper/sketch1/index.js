export default function (p) {
    p.props = {}
    p.onSetFrameRate = () => { }

    let startAngle = 0.004;
    let showModifier = 0.3;
    let stopValue = 0.35;
    let anim = true;
    let initialStrokeLength = 100;
    let initialStrokeWidth = 5;

    const branch = (len, wid, p) => {
        p.strokeWeight(wid);
        p.line(0, 0, 0, -len);
        p.translate(0, -len);

        if (len > 10) {
            p.push();
            p.rotate(startAngle)
            branch(len * p.props.nodeLenghtModifier, wid * p.props.nodeLenghtModifier, p);
            p.pop();
            p.push();
            p.rotate(-startAngle)
            branch(len * p.props.nodeLenghtModifier, wid * p.props.nodeLenghtModifier, p);
            p.pop();
        }

    }

    p.setup = function () {
        p.createCanvas(p.props.width, p.props.height);
    };

    p.draw = function () {
        if (p.frameCount % 60 === 1) {
            p.onSetFrameRate(p.frameRate().toFixed(1));
        }

        if (anim && startAngle <= stopValue && ((stopValue - startAngle) * showModifier) > 0.0001) {
            startAngle += ((stopValue - startAngle) * showModifier);
            p.props.onUpdateSliderValue(startAngle.toFixed(3));
        } else {
            startAngle = p.props.angle;
            anim = false;
        }

        p.frameRate(60);
        p.background(255);
        p.strokeWeight(initialStrokeWidth);
        p.stroke('#5866c3');
        p.translate(p.props.width / 2, p.props.height)
        branch(initialStrokeLength, initialStrokeWidth, p);
    };
}