// ______________________________________________________________________________
// FRIENDS - aka potential new mates
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var friendsArray = [{
    name:"Colonel Sanders",
    photo:"https://ewedit.files.wordpress.com/2018/01/gettyimages-72431338.jpg",
    scores:[
        5,
        4,
        3,
        2,
        1,
        1,
        2,
        3,
        4,
        5
      ]
  },
  {
    name:"Rob Lowe",
    photo:"https://media.vanityfair.com/photos/56cc5332ae46dea861df171d/master/pass/dam-hollywood-2011-05-rob-lowe.jpg",
    scores:[
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ]
  },
  {
    name:"Burt-Reynolds",
    photo:"https://www.921wrou.com/wp-content/uploads/2018/09/burt-reynolds-turtleneck.jpg",
    scores:[
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4
      ]
  },
  {
    name:"Putin",
    photo:"https://topic.imgix.net/usq/d98d5500-2302-489e-a3cc-554d4542b1c7/b37f6a79-5c37-4dc3-ab93-0ea4672a06e1.jpeg?auto=compress,format&cs=srgb&w=1400&_=a7f9de31ee89dfd95170db391dbb99ba&bg=f0eae6",
    scores:[
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
  },
  {
    name:"Cara Delevingne",
    photo:"https://www.alux.com/wp-content/uploads/2017/08/Cara-Delevingne-Net-Worth.jpg",
    scores:[
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
  },
  {
    name:"Lena Dunham",
    photo:"https://thenypost.files.wordpress.com/2018/01/gettyimages-634606188.jpg?quality=90&strip=all&w=618&h=410&crop=1",
    scores:[
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
  },
  {
    name:"Zosia Mamet",
    photo:"http://www.zosiamamet.com/pics/glamour1402.jpg",
    scores:[
        1,
        2,
        3,
        5,
        4,
        3,
        2,
        5,
        3,
        1
      ]
  },
  {
    name:"Jacobim Mugatu",
    photo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEA8VFRUVFRUXEBAVFRUVEBYVFRUXFhUWFRUYHSggGBolHxUVITEhJSkrLi4uFx8zODMtNyotLisBCgoKDg0OGhAQGi0lICUtLSsrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBQYEBwj/xAA+EAABAwIEAgcFBQgCAwEAAAABAAIRAyEEEjFBBVEGEyJhcYGRMqGxwfAHQlJy0RRic4KisuHxM8IjNJJT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJREBAAICAgICAgMBAQAAAAAAAAECAxEhMRJBBBMyUWFxwaEi/9oADAMBAAIRAxEAPwB7QnQk1OAXoPPEBOhAJ4CQNAT4QITwgAAjCJCMIABicGpNKeEGY5qMJ0IZCkARC6GYN5iIuhXwzmajVI0bU4BRAqVjkAYRhOyHWD3IEQgwhGEkUjAoQiUkHBIoIhIxTSnJrggHgIgIBOSMoSSSQFKAnBIJwCszkAngIAJwQZQnBKEQkAKIRShAABOCCIQZ4T6b8p70wLgxGIkzop3t4w7pXyloaNa947l3tph/td47wszhsS4QTt7vFXWCrmZnXyWX7uWr6eFfjcKaby3Xke5T06LRGn1su3GlriWmMxEtkel1lqfE6heWEAOBg/7V5zViEIw2mWuw1cAWA+XoukYRr221cNVmuHYhxeWkmwkW1V5hcX/gKUZo2p9MquvRcwlrhp9So1d8ZYHNDouNxuO9UcrRE7R1okkkUzJFBEJAUoSRQCCcE0JwSMkkUkBShPATQngKzOcEQEAnhBiAiEEUgSISSCDKEiilCAEWVHiDDj9fW6vgVRYwQ+d2un5qGaOFsE8uk1nGdL638/K67sPX6psuPa1Aib8jKon4wNyuaYgySdCDsQg3Gis8tO+c7BxhpIa0nQmInv3XmX29XHG2kOLaajS5pIIAzSfOBpAJQqYEOrl4bMgWmBMkSfRQYFp6podYySGm5Gu/orGix0GOVlxuYV+ncbcNN01C5jvZIB8dld4C0SNdSqzh2GmgwEw5zi4nnBIaD6lW+Dp20v8AoqY+ZQy18YdePc0Unb6euizysOK1IAaDrd21xp81XAr08f4vMt2cigEV0RJyCIQCRQRQYhFAIpAkkUkBUAJwTQnBWZzkQgiEGcE4IBJICkkigEigkgxAVJx10OFtRt3bq7WY49Wc7EtYNGs/qfPyAU8kxEcq4aTa3DN8Q4oZyOGXY/W3P9VPw7EMLozD6uFz8ZphwJOrCI8SYN+V1w8FoYWpRcalWvTrNLjTfTFOpTcCBAcwkPBme0CRdQ+ut+uGyc04Y3Z6bwwS0FpnvmZ81f4XS68Y6Mcer4So+bMaC51B8gkyIFP965PKAZWzo9OOuGTDUmisQSBiKrKFOLQQ5xAebwGyCYJ0us2T4mSsxqNxLdX5mO1dzOtNu2Gm2kyBsDMkhObVyy76JheQcK6SYzFYlofXeKc5q3VgAMpgS8hu1rAukAlttl3YzO/EingcTWy1HAF1VwqPAEF7pgS0Cbdy14Pgz3MwxfI+VW261hv8TULjJ1UIKVGkGNDWzAECTLvEncoOVmFK0pwULSpWlIz0QgEkAUQgnBIxSSQlIxSQSQFUE4JgUgV2UQnJqcEOhRBQRASAlEJqcgyRCASKAcsr0swrg9lZpiIB8RPvjRaiVFi6bHNIqRlOsmB67FTyV8q6Vw5PC+2OxuGaWOmwcPO4WRHDcRSJLKTnjZzRPjpJhbHi4AAA025WT+CuMEHQXPcs+TNOG+6+np48VctdW9sV+y16hmq0saNQbOI/CN1tOl/C3dVRxNJkmmwMqtaL9WT2DG4aZH8/cq/FAmpdjiXEZAAYI/VegcPrDK0AOs0EyLEaR81O3zMn2VyzPMK0+LTwtjiOJeQcNqNaSYynMQ68ZRM5T4GNdC0Feh9E+Emm01qjSHvtTaZBbTMGSNi4geQHNafqKbSC2mwH8Qa0O9YUTnSZV8Wf7eo1r/WP5WL6q6/f+GpQgUVZig3Ki0p6jLUjTAoqNrlIgCiEEQkYpJISkYpISigKlPamJzVoZj0QmynBIzkU1FICigkgxRQSQAr1WsaXuMNaC5x5ACSfcvEOknGKuKrPe9zspcTTpknKxujQBoDETG8r0jp7xQU6IoNPbrf0saZJPiQB4B3JeXcQow4kaHTunYqWXpfF23GHxYq0xzAHoQEevyN1hs9qNTGgjfwWVwPESyO4R5LZcI4WyvSbUc4w6TAPfAA9NViybnl6eK8RwsOE41j3sORxykmwaYsYMAzutBhKgpsY1xIgBslrgCfEhUXDuABpcZIBsfIzf62WiwfCjGUuMAWnu0WW3MtkTEV5dbnARJ107zBMegJ8kxYLG9IuursNF5NOiDD/ALr3kgE97QBA/m2K2+FxAqMa9ujhPhzHkbL0vjY/HHv9vG+Zl88mo9JUkEVdmFFNCckZj7JzHJr0GpB0BFRtcnyk6FJAJyAUJIwkg1QEQU1EFXZTwnJgKMoM9EJspSkDpRlRVaoaC5zgABLnEgNA5knRZbi3TvD0pbQaazvxezSHnq7yHmlM6dREz01yzvSDpdQwzXCm5tWqLBgMsB5vcLeQvppqvPeM9KcViZD6mVv/AObOyzz3PnKp3VOzAH19R6Kdskelq4v2ssZxp+IqGrVMuJ2sAIjKByhclerm89lysanTCn5TMcqxWIkiYNrdy1vQvj+VzKNRwAztyEmBBJkT5+cBZDMTsth0H6GuxpFaqctBroOoe8tuQ07DYnvteYnLvb07ADM0X3MnwNvgFS9LOmTMMx7KNRrq7szGsHaLDoS6NCCdDutHRawNysEDd0nMZ1IOo8VzYDhGEa4H9lpEj2XZBmuZ+N1OmOO9u7ZJ6eQ8PGVjLbA/X1ut10M4iDmouP71OfRwvvoY8VpekHQejiR1lCKThmLh9wuiRI+6Dpb0XmGJ6zC4nq3tyupkiozaSNu4i/eCFtpaNMlqzMvVQisPgektSm/I52ZhALS65A0iddlq8BxKnWFjB3aefcd114/pxv8AbsKUpQguDJAIkIEpGeE9RtKeCgzgU8KIpzHICRFNSQanBRUYKdKuzHBPCiBT5SB64uLcUpYWmalU20a0e052zWjmhxTiVPDUzUqGw0A9pztmtHP/AGvK+P8AGKmLqZ32AEMYPZaDeO86Sd48AObW0pSm03H+P1sY7tnKwezRB7A7z+J3efKFUQhN/JEKW9tERpFUpqO7V11RoPM/L5rmqKdodwTgSdEKZk/Wy6aWm6hCWhtb4XB56jGMbJIbPO+umi9cwVRtOk2m2Wta2A3Uk7n61XleFxRo1AaTZdkAiDBBJm2sr0HC1S9geIEiQIvfYmfgucscO8fMuijjnlxA23Nrclp+F4e0mCbd6ztCgGta46l0Hw1n4LVYMAtAHPwMDbu8FmtfXEL+G+VnhWWIN59F5h9rvBeqezFtIy1ajWVBvnFJwaZ3Baw+GXeben0XCPlpED/Cxf2v9rAtv7Nem6OYhzP+8+APiK4b86RyU9vLHOgt8CPgurC8RfTqWNiBI57fJcNd0Bp8fgE57SXj8o+JWuLTHMM81ie3oHBukTX9l+xIneButC0giQZHNeUUCWkkHcq94F0iLGtJPZJDXA6TzVImL/2lNZr/AE3YSIUWGxLKjZYfEbg8ipZXEnBqOZBIBI0jSkmgohAOkpJSkgKZpT1DonAq6CSUqtUNaXOIDWglzjoABJJTQVmOn/EDToCkDeqYP5GwXepyj1RM6g6xudMf0g42/FVS8yGiRSZ+FtrkfiMSf8KsYZ9R9fBRuKNPVZptO2yKxEE49oqQaqAFSgpQJPdqTy+S5nG6camqjnVKZOHVT08kxyLTZNqFOeg0fCeFmuczrNaG5pm8lxt71r+FFxDm06ZyUwACJjkGydXGR3rPYTiL6WFa7JnGYMAzaAknTWNRZeqfZ5jsPisO1zaYaWe0BPVyS4BzC4domDM3me4mOa3GlMUc7UvGuJUcHSH7S12aAcrQHOM8wSPoKz6NccpV25mElro1bDmEgGC20SIPIzyV30nwtEgPdTa7VhloMg7X2VHwfhlCiC+jRa3Mb5BlAg7Dc968+f8ArbHMfw09ASYF9p911579qmBxlQA9Uf2emGkPkEFxIkubqIu0GNze8D0bCOAAJ3hSV4LTIkEGRzB271qwaidyy5dz0+csUycg/eE+h/RdjGX8h8Sr7pfwd1Ks5zaZ6uZDwJFwdYJyzO8XKoWHtE8gPgtrMZUqhrXHmXel/wBFycNMsIO598FLiDopjvB/qIHzKZgTlpydpjxiB80j1w0nBeLOo1WzoR2vINEfW8L0KlUa8BzTIIkHuXjLnjOSJOVml4Pj5e9bToLxkuPUuNnCWdzhct8xf+XvVPPyjlKaancNoQmwngptRIjFIo2lOBQDkU1JBqdxSTZunq7OcCvMumuO63FOAPZpgU28pEl3vJ9AvQuI4wUKT6p+40keOjR6kLyGo4kknfUqeSeFsMc7RlKnuiUKQ1UGkxPe6yaRdB0pACy0pindp5KIfNKYCSm9KpokWQhVTDb8Gp0q+G6owSLmQeybkefgvSehZdQotYRSyNbfKwsM7l0udNouTz8B5D0d4lToh+YwSRBuezAsI3kDyXoXRzibA01zVyUmNIe6DDudiJue7bvWbPtoxa9rLinSllaWAQ0O5XkWJmTK7OH8RYBlabASDtEwT6rw/ivEDUqOyvcGOJIpyQG3sI05LW9DeOPcWUKsHRtM5RlaLmT778ypWxTEbd1yRM+L184gNid9Ry/yOXipsbxCjQZnq1WsB0JcBJibDmqPC13udJcQA0Al2g235rLdNeLYXEUy3MRXY4QG3adey++UEAXGrSSJFwTDHlLnLOoZ/juNGIruqimGZyDAJIIyxMnWfRVjj/yenuCbhMePYqCA2zHzYQLx+7p6SiR2ani73FejOvTFH8uDiujR+X4E/oo67stNgHtE9kd+nz+Cn4iJe0fWgUeOaBlnVgED8xg++FzLpLgsNkJa7tHYbXEEn1IVlw1/UvbU3Y4ExYQ03gd4C4cE8kCdTY841H/ZWDBqPrl8k4EvUQAdPIo5VW9HMR1mGpncNyu5yzs/IKzXaJophOyJIhBlkCSKSQZ8J8qMJ0rQgyf2h4+GU6AN3HO8futkNnxMn+VYZpVt0sxPWYqodmuyN8KYDT/UHHzVMwrNe25a6V1UnC6VNJ2iVJcOwdqiEDqkiAVTT0+Kjbsn1XW+u9Mp6hKQnUdZSqKpqESaWV3Yji9U0uobUeKIynqp7JLQBmcN7iY531XBKa4oAMqQbgHuK7+G44U6jHgPGVwLgx0HLPaiVX5QU+lY+o9QuZgNrxDpW7EUalLtBrsuST2jBGbNB0Im14JAmJmrAEDwXNwbh1bFEtoMzkRNwGiTAknTf0K2WM+zzGUaJq9bTqOaJfQYHWEScrz7Z7oHrY8xNa8Op3PLK1KYItodOXP4pUnlgcIBa6xnWeYI02CeHSPgfgmVHSOQOvyJhWidJTG13guAftLKlUVmh1MZhSyudUcWjSBoDEZtL32nM46TVcDaBHz+YWj6IYqq3GUG0xJNRrXMk3pkw9p5gNk91jsvQOmPQlmLBqUyGVGtOQ5Za6LhroveTcAxbayJmNiNvJcC75H68pVk3VVVMZXZTYgw4cuYVjS9kcx8QmGs6DYi1SkToc4HjY/9Vq15z0YxfV4oXs45T/NYe+F6Ku057FEIIoIcySbKSQUATmlQYmsWMc8NLsrSco1MCYEqh4xxttXCzhzLqsMy/fYC0uqZhtDQ6/fKtNohKtZlhMdWzvc/8TnO/wDol3zXKCpaw0POFCSsktkHOdCc3ZMfonIMXbpj05yjPegglFmqDgjS1SDoBUTtQpGshRn2gmZ5XRhMEakxtHqe7fQmAoCVZ8BrEOIkwSDZoItOtxHwslPRx2tG9GqWRpJc2PbdrqNxEaqPgfR6nVqllZ5AkBpbAfGuYTbQOF9IlarDkFse0IuNlxUWChUtlIBHtjM0tmRpf69M05J3prjFWa9NrwHBDDtp0yWvIY1jKoDZLW2EiJsBv71taAhsAbecrKcBrMrCAHENEtmTGtxuNdFrcLlDW6nv381P25t08V6d8DNHEuqMb/4nkuBaTlDs12RALYJ0uI0OoGcaI7MZjYNaBqXWbbe8j/a9b+1Ckx1FjRSDqr3tbS1zkzo2NbSeWpVJwvosMK6kXkOrwX1IMsZJhjW21gGTz0tro+2K13KVMU3tqFj0I6JtwwGIrAOrm4Goozs3m+LE7TA3J3FK+qr+GhxBtabj5yrAseCCACB7QPht7lnjJMzta+Otf/MMz0m6GUsWesJcHtBDQIjwg+HPnzXlmIwz6L3UqghzTcSD7wSNp819BCPRZrj3CsKxr6pw2cuIL8rWucNiQXezFzstePJvtkvXTxuS2oCDHevUsFiOspsf+JoPmRceq8uxVak9znUXSwOdl55c1p9y3HQ7FZ6GU6sdHk649+ZaInhGzQIhMBTgm5FFBJIM8CvPOJ0P2XFPzU4a+lUp0HNENIfTNNpPeA7KfCd16CFivtArjrKDd2hzj4OcAP7Cu8nW3OOedMu+7VzAKd2hChBWeWkZsimkJwSMHFCpsi5Gs2w8B80ylHKloC6hCnw+qQSll/JQx2l1lt1zx20zEhJtinFCEg3PBsUHsEMI7lPxFktkahZjo/iqzXwHEs5SDe1hy19y1pbmg39Pr6Ky5K6lsx23C96JvDSJLgY0aPqSvRcE8kAkQALDn3n1WI4E/KYAYDGsT4CdvFa6iXtaCf5W7C+9781PfItA8SoNfleWw9s5HwCWyIOWZAsSPArP06Ya5znGSTJKu+I4rLEemu1/is/jDndlDg20vf8AhGx01nntK4yTudL/AB6+MTaWkwdZtNjWuIBySTtJcV04dtpbykTMeiqcPWhrTIeSMpAMNPxjmu4ZoF73kA29OScShaHW1xiYTMRSa9pa4Ah1oXFmOY9qBoB3jVOGNY0wXNF4AJEzEn4hVpKVoef9M+hRbVpnA0AA/MapkNabRlvZoGsnui6peh9V9DEvw9VpY4ghzDqHN7Q0sRGaCJBlemdJeMU2UHw9s5Tlv3TsvHOB4mpW4hRcSTeAZ+6xhMH638luxzuGS8al6gEQUxEFUTPlJBJI2dleXdJsb12JqOBsDkZ+VnZt4wT5r0PjOM6mhUqTBDTl/MbN95C8rDdE8s+iwx3KV+qgi8Kep+iiqDf1Up7Xgwp4TXBGbLkELlS4nfy+ajbqFNXuHeI+C69FPblC6MMIK511YW/13rmDdQbc/WwXPTEv8yuouuT4fALnwp7UphI+nHuUbmwuuu3tW+tU04e5B5j4IDkwuJdTeS1xHNbPopjnVgWEXb97mNB81jHU4e4cv8LV9E8RTp03ueS2CG5gCQM2YyQLwA0me5SyV3CuO2pbvg+KylrXNEzbcGNAtS7HhrS6oQ0DwtKw1LHNLWGm7Mc2YEbQYB7im9IMYa7gQC32W1J0LxMEjnBA8lm6aOJloXY/r6hLWOOwsYPfJt/pdg4e5gL3tEnYP7ViCLAX9YWEwfEXUCG58veD8P8AK2XD8V17WuzEgfccO2CZu1wPaHjtN9xKa87aZvxER0v+H4caQdBYxprYcpJuu12WIDY1B8dFw8Kb1YgkkbA+1GoDnbm6mxjixhdmGaDE6Sd4XUM1u1dxziNHCMNSs8SASBO88l5VxPiDsRUNYmJksH4Rc+t037ROJnE1Gta9r+rbDntHZz3kMM3EBoOtwVSYTEf+Efu2+YW7DTxY8l9pOIY1zjBcY71oOgGCcXurFvZaC1h/edEx5a/mCo+CcJfi6mVtmi9R+zR+p2C9PweHZSY2nTbDWiAP15nvWlCZTyjKASQQ5kVFKSQef9Pv/XZ/Gb/Y9YQapJJZPydYvxSVPkE2pogkuJ7VjpH+iBSSXIPU1b2T5fBFJdehLkXVg9R5pJLmA7Kmp+tlFgPa8wkkmHbifb+uacPad5fJBJAcTv8Akf8AXJWOG/46n5PmUUkp6NddF9WeDPi5aDiu/if7GoJLHk/Jpx9KXF7+AWn4J7dL8tP+xqSS5t0pDeM+94N+Ki4t7D/D5FJJcx2UvDeK+0/+LU/uVXhv+N38T5OSSXqR6efPtv8A7Pv/AF3fxT/Y1adJJdpCECkkkZJJJJh//9k=",
    scores:[
        1,
        3,
        4,
        2,
        5,
        3,
        1,
        5,
        3,
        1
      ]
  },
  {
    name:"The Fat Jewish",
    photo:"https://nyoobserver.files.wordpress.com/2015/09/bfa_12947_1604178.jpg?quality=80&w=1940",
    scores:[
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        3,
        2,
        1
      ]
  },
  {
    name:"Jonathan",
    photo:"https://media.timeout.com/images/105252502/630/472/image.jpg",
    scores:[
        5,
        4,
        3,
        2,
        1,
        5,
        4,
        3,
        2,
        1
      ]
  }];
// Exporting array so other files can access it.
  module.exports = friendsArray;
