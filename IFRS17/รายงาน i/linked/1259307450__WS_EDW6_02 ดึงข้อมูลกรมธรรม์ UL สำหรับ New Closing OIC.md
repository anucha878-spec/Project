# WS_EDW6_02 ดึงข้อมูลกรมธรรม์ UL สำหรับ New Closing OIC

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1259307450
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-Overview) ] [ [Protocol](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-Protocol) ] [ [Operation](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-Operation) ] [ [Input](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-Input) ] [ [Process](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-Process) ] [ [Output](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-Output) ] [ [Exception](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-Exception) ] [ [Example Input & Output](#WS_EDW6_02ดึงข้อมูลกรมธรรม์ULสำหรับNewClosingOIC-ExampleInput&Output) ]

## Overview

สำหรับดึงข้อมูลกรมธรรม์, ข้อมูลลูกค้า, ข้อมูลแบบประกันของแบบประกัน UL จากฐานข้อมูล AS400

## Protocol

>
Icon

tbcpmd01

## Operation

refer : [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)

>
Icon

TYPE :

## Input

| Name | Type | Description | Required | Example |
| --- | --- | --- | --- | --- |
| limit | numeric | ช่วงที่สิ้นสุดดึงรายการข้อมูล | required | 3000 |
| offset | numeric | ช่วงที่เริ่มดึงรายการข้อมูล | required | 0 |
| transactionDateInt | numeric | วันที่ 1 ของเดือนปัจจุบัน | required | 20250401 |

## Process

>

## Output

| Parameter Name | Description | Table | Field | Type | Size | |
| --- | --- | --- | --- | --- | --- | --- |
| PolicyNumber | เลขที่กรมธรรม์ | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | POLNVC | varchar | 10 | |
| PlanCode | แบบประกัน | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | PDCDVC | varchar | 10 | |
| InitialSumInsured | จำนวนเงินเอาประกันภัยเริ่มต้น | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | OSINBD | numeric | 22,3 | |
| ActualSumAssured | จำนวนเงินเอาประกันภัยปัจจุบัน | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | SMINBD | numeric | 22,3 | |
| IssueAge | อายุเมื่อเริ่มทำประกัน | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | AGPCNM | numeric | 3,0 | |
| PremiumTerm | ระยะเวลาชำระเบี้ยประกันภัย | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | PAYTNM | numeric | 22,3 | |
| CoverageTerm | ระยะเวลาเอาประกันภัย | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | COVTNM | numeric | 22,3 | |
| EffectiveDate | วันที่เริ่มความคุ้มครอง | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | CTSTDT | INT_BE_YYYYMMDD_TO_DATE | | |
| SalesChannelcode | ช่องทางขายใช้ตัวย่อตามบัญชี | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | BRSCVC | varchar | 10 | |
| EMRRate | EMR Rate | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | EMR0BD | numeric | 6,2 | |
| IssueDate | วันที่ออกกรมธรรม์ | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | ISPODT | numeric | 17 | |
| CurrentPolicyStatus | สถานะกรมธรรม์ปัจจุบันของ UL ณ สิ้นเดือน | [ULLIB](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451)_CCMSTS01, หรือขึ้นอยู่กับเงื่อนไข SQL | PLSAVC | varchar | 20 | |
| InsuredSex | เพศของผู้เอาประกัน | [ULLIB_TPSPLC01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=529203451) | GENDNM | varchar | 10 | |
| OcpClass | ชั้นอาชีพ | [ULLIB_CUWOCC03](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=531497120) | OCCLNM | numeric | 4,0 | |
| ModeOfPayment | งวดการชำระเบี้ยประกันภัย | [ULLIB_CCMMOD01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=528482401) | MDTYNM | varchar | 50 | |
| ModalPremium | เบี้ยรายโหมดล่าสุด | [ULLIB_TBCPMD01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=586187108) | SPAMBD | numeric | 22,3 | |
| ExtraPremium | เบี้ยประกันภัยหลักสำหรับภัยต่ำกว่ามาตรฐาน | | | numeric | 22,3 | default = 0 |
| TopupPremiumPaid | เบี้ยประกันภัยเพิ่มพิเศษที่ลูกค้าชำระภายในเดือน | [ULLIB_TPSALT02](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=583139819) | PREMBD | numeric | 22,3 | |
| TopupPremiumAccum | เบี้ยประกันภัยเพิ่มพิเศษที่ลูกค้าจ่ายสะสม | [ULLIB_TPSALT02](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=583139819) | PREMBD | numeric | 22,3 | |

## Exception

## Example Input & Output

1.

>

```

```

>

```

```

To enable screen reader support, press Ctrl+Alt+Z To learn about keyboard shortcuts, press Ctrl+slash

Suwisa Sonkaeo - สุวิษา สอนแก้ว has joined the document.