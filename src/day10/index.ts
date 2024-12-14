export enum Gift {
    Coal = 0,
    Train = (1 << Coal),
    Bicycle = (Train << Train),
    SuccessorToTheNintendoSwitch = (Train << Bicycle),
    TikTokPremium = Train << (Train | Bicycle),
    Vape = (Train << SuccessorToTheNintendoSwitch),
    Traditional = Train | Bicycle,
    OnTheMove = Vape | TikTokPremium | Bicycle,
    OnTheCouch = TikTokPremium | Vape | SuccessorToTheNintendoSwitch,
}
