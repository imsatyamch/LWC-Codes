import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carsList =["Toyota RAV4",
        "Toyota Camry",
        "Honda CR-V",
        "GMC Sierra",
        "Toyota Tacoma",
        "Tesla Model Y",
        "Toyota Corolla"];

cars = [
        {
            "color": "purple",
            "type": "minivan",
            "registration": new Date('2017-01-03'),
            "capacity": 7
        },
        {
            "color": "red",
            "type": "station wagon",
            "registration": new Date('2018-03-03'),
            "capacity": 5
        },
        {
            "color": "blue",
            "type": "sedan",
            "registration": new Date('2019-05-12'),
            "capacity": 4
        },
        {
            "color": "silver",
            "type": "SUV",
            "registration": new Date('2016-11-22'),
            "capacity": 5
        },
        {
            "color": "black",
            "type": "hatchback",
            "registration": new Date('2020-08-15'),
            "capacity": 5
        },
        {
            "color": "white",
            "type": "convertible",
            "registration": new Date('2021-02-28'),
            "capacity": 2
        },
        {
            "color": "green",
            "type": "pickup",
            "registration": new Date('2015-07-10'),
            "capacity": 3
        },
        {
            "color": "yellow",
            "type": "SUV",
            "registration": new Date('2022-09-17'),
            "capacity": 6
        },
        {
            "color": "orange",
            "type": "sedan",
            "registration": new Date('2023-04-09'),
            "capacity": 4
        },
        {
            "color": "brown",
            "type": "hatchback",
            "registration": new Date('2024-01-20'),
            "capacity": 5
        }
        ];    
}