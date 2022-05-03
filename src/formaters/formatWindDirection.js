export default function formatWindDirection(deg) {

    if (deg >= 348.75 || deg < 11.25) {
        return 'N'
    }
    else if (11.25 <= deg && deg < 33.75) {
        return 'NNE'
    }
    else if (33.75 <= deg && deg < 56.25) {
        return 'NE'
    }
    else if (56.25 <= deg && deg < 78.75) {
        return 'ENE'
    }
    else if (78.75 <= deg && deg < 101.25) {
        return 'E'
    }
    else if (101.25 <= deg && deg < 123.75) {
        return 'ESE'
    }
    else if (123.75 <= deg && deg < 146.25) {
        return 'SE'
    }
    else if (146.25 <= deg && deg < 168.75) {
        return 'SSE'
    }
    else if (168.75 <= deg && deg < 191.25) {
        return 'SS'
    }
    else if (191.25 <= deg && deg < 213.75) {
        return 'SSW'
    }
    else if (213.75 <= deg && deg < 236.25) {
        return 'SW'
    }
    else if (236.25 <= deg && deg < 258.75) {
        return 'WSW'
    }
    else if (258.75 <= deg && deg < 281.25) {
        return 'W'
    }
    else if (281.25 <= deg && deg < 303.75) {
        return 'WNW'
    }
    else if (303.75 <= deg && deg < 326.25) {
        return 'NW'
    }
    else if (326.25 <= deg && deg < 348.75) {
        return 'NWN'
    }

}