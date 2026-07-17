# [ยกเลิก] - UR - Closing Timeline - WS_EDW3_20 ดึงข้อมูลกรมธรรม์ rider อุตสาหกรรม สำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1124073643
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-Overview) ] [ [Protocol](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-Protocol) ] [ [Operation](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-Operation) ] [ [Input](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-Input) ] [ [Process](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-Process) ] [ [Output](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-Output) ] [ [Exception](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-Exception) ] [ [Example Input & Output](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_20ดึงข้อมูลกรมธรรม์riderอุตสาหกรรมสำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ-ExampleInput&Output) ]

## Overview

สำหรับดึงข้อมูลกรมธรรม์ rider อุตสาหกรรม สำหรับหน้าจอข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ จากฐานข้อมูล AS400

## Protocol

>
Icon

## Operation

refer : [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)

>
Icon

TYPE : inquiry

## Input

| Name | Type | Description | Example | Validation | Remarks |
| --- | --- | --- | --- | --- | --- |
| policyType | List | ประเภทกรมธรรม์ ปช/ขพ | I,G | Required | |
| monthYear | string | วันที่ดึงข้อมูลformat YYMM (พ.ศ.)YYYYMM (พ.ศ.) | 6412256611 | Required | |
| limit | numeric | ช่วงที่สิ้นสุดดึงรายการข้อมูล | 1000 | Required | |
| offset | numeric | ช่วงที่เริ่มดึงรายการข้อมูล | 5000 | Required | |

## Process

>

## Output

| Parameter Name | Descriptions | AS400 Table | AS400 Field | Type | Size | Conversion |
| --- | --- | --- | --- | --- | --- | --- |
| PolicyNumber | เลขที่กรมธรรม์ | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | POLNO | CHAR | 10 | |
| RiderStatus | สถานะ Rider บันทึกเฉพาะอุตสาหกรรม | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | PRISTS | CHAR | 1 | |
| RiderModeOfPayment | โหมดการชำระเบี้ย (1-12) บันทึกเฉพาะอุตสาหกรรม | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | PRIMOD | NUMERIC | 2 | 0 |
| maxAgeReinstate | อายุสูงสุดที่สามารถต่อสัญญาได้ ตามเงื่อนไขข้อกำหนดการขาย | OLIS_OLPRIDE2 | RD2ACV | CHAR | 1 | |
| RiderPlanCode | แบบประกันสัญญาเพิ่มเติม | [GWLIB_TBRIDPLN](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDPLN) | RDID | CHAR | 2 | |
| RiderInitialSumInsured | ทุนประกันเริ่มต้นของสัญญาเพิ่มเติม | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | PRISIN | NUMERIC | 14 | 2 |
| RiderModalPremium | Premium by Mode ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | PRIPM | NUMERIC | 14 | 2 |
| Standard | เบี้ยเพิ่มพิเศษของสัญญาเพิ่มเติม | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | PRIEPM | NUMERIC | 14 | 2 |
| RiderEffectiveDate | Commencement Date (วันที่เริ่มความคุ้มครอง) ของสัญญาเพิ่มเติม | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | PRICDT | NUMERIC | 8 | 0 |
| RiderMaturityDate | วันที่ครบกำหนดสัญญาของสัญญาเพิ่มเติม | [GWLIB_TBRIDMS](http://wiki.thaisamut.co.th/display/APP/GWLIB_TBRIDMS) | PRIMDT | NUMERIC | 8 | 0 |
| CurrentRiderPolicyStatusDate | วันที่ชำระถึงของสัญญาเพิ่มเติม | [GWLIB_PAYMTDT0](http://wiki.thaisamut.co.th/display/APP/GWLIB_PAYMTDT0) | PYDUEN | NUMERIC | 8 | 0 |

## Exception

## Example Input & Output

1.

>

```

```

>

```

```