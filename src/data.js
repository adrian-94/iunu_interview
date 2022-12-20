export class ProductionRaft {
  capacity = 48;
  plants = 0;

  set varieties(variety) {
    this.variety = variety;
  }

  set transplantDay(day) {
    this.transplantDay = day;
  }

  get open() {
    return this.capacity - this.plants;
  }

  get ready() {
    return (
      this.transplantDay +
      this.variety.actions.find((a) => a.type === "harvest").day
    );
  }
}

export class GerminationTray {
  capacity = 276;
  plants = 0;

  constructor(variety, day) {
    this.variety = variety;
    this.initialDay = day;
  }

  get open() {
    return this.capacity - this.plants;
  }

  get name() {
    return this.variety.name;
  }

  get ready() {
    return (
      this.initialDay +
      this.variety.actions.find((a) => a.type === "transplant").day
    );
  }
}

export const varieties = [
  {
    id: "1",
    name: "Romaine Lettuce",
    actions: [
      {
        type: "transplant",
        day: 2
      },
      {
        type: "harvest",
        day: 30
      }
    ]
  },
  {
    id: "2",
    name: "Butterhead Lettuce",
    actions: [
      {
        type: "transplant",
        day: 14
      },
      {
        type: "harvest",
        day: 38
      }
    ]
  },
  {
    id: "3",
    name: "Rocket Lettuce",
    actions: [
      {
        type: "transplant",
        day: 3
      },
      {
        type: "harvest",
        day: 21
      }
    ]
  }
];
