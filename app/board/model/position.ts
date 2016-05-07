export class PositionProvider {
    static GetPosition(positionName: string) : string {
        var position: string;
        switch (positionName) {
            case "NewGame": 
                position = "W,a2,b2,c2,d2,e2,f2,g2,h2,Ra1,Nb1,Bc1,Qd1,Ke1,Bf1,Ng1,Rh1,B,a7,b7,c7,d7,e7,f7,g7,h7,Ra8,Nb8,Bc8,Qd8,Ke8,Bf8,Ng8,Rh8";
                break;
            case "Puzzle1":
                position = "W,Bc2,Kg1,Qh4,B,Rf6,Rf8,Kg7";
                break;
            case "Puzzle2":
                position = "W,Qa2,Ng3,Bg5,Kh1,B,Kg6";
                break;
            case "Puzzle3":
                position = "W,Nb3,d3,Kf1,Qh1,B,Ba4,Kb5";
                break;
            case "Puzzle4":
                position = "W,c7,d7,Ke5,g7,Rh7,B,Ke7,Nf8";
                break;
            case "Puzzle5":
                position = "W,Qa1,Ka8,Nc2,Ng6,B,Nd3,Ke4,Nf5";
                break;
            case "Puzzle6":
                position = "W,Kb3,d2,Qh2,B,Kd4,Re4";
                break;
            case "Puzzle7":
                position = "W,Kc8,Ne8,Bg1,B,Ka8";
                break;
            case "Puzzle8":
                position = "W,Kd2,d4,Qg7,B,Ke4,Qf3";
                break;
        
            default:
                break;
                
        }    
        return position;
    };
}