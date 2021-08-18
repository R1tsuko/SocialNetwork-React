let defaultState = {
    friendsData: [
        { imgsrc: 'https://steamuserimages-a.akamaihd.net/ugc/1768198688957635829/95A811F58C7331579D2115A7D0412D5CB22B355A/', name: 'Падж' },
        { imgsrc: 'https://steamuserimages-a.akamaihd.net/ugc/1768198688957635829/95A811F58C7331579D2115A7D0412D5CB22B355A/', name: 'Паджеро' },
        { imgsrc: 'https://steamuserimages-a.akamaihd.net/ugc/1768198688957635829/95A811F58C7331579D2115A7D0412D5CB22B355A/', name: 'Мясник' },
    ]
};

const sidebarReducer = (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default sidebarReducer;