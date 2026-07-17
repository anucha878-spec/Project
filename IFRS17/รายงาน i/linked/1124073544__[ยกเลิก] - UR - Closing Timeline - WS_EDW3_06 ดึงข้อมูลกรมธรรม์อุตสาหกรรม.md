# [ยกเลิก] - UR - Closing Timeline - WS_EDW3_06 ดึงข้อมูลกรมธรรม์อุตสาหกรรม

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1124073544
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-Overview) ] [ [Protocol](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-Protocol) ] [ [Operation](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-Operation) ] [ [Input](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-Input) ] [ [Process](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-Process) ] [ [Output](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-Output) ] [ [Exception](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-Exception) ] [ [Example Input & Output](#id-[ยกเลิก]-UR-ClosingTimeline-WS_EDW3_06ดึงข้อมูลกรมธรรม์อุตสาหกรรม-ExampleInput&Output) ]

## Overview

สำหรับดึงข้อมูลกรมธรรม์, ข้อมูลลูกค้า, ข้อมูลแบบประกันของแบบประกัน อุตสาหกรรม จากฐานข้อมูล AS400

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
| limit | numeric | limit | 1000 | Required | |
| offset | numeric | offset | 5000 | Required | |
| policyType | | ประเภทกรมธรรม์ ปช/ขพ | I,G | Required | policyType = 'I' ให้ทำข้อ 1 หรือ 2 หรือ 3 ขึ้นอยู่กับ statuspolicyType = 'G' ให้ทำข้อ 4 หรือ 5 หรือ 6 ขึ้นอยู่กับ status |
| status | | สถานะกรมธรรม์ | active, lapse, inactive | Required | กรณี 'active' ให้ทำข้อ 1 หรือ 4 ขึ้นอยู่กับ policyTypeกรณี 'lapse' ให้ทำข้อ 2 หรือ 5 ขึ้นอยู่กับ policyTypeกรณี 'inactive' ให้ทำข้อ 3 หรือ 6 ขึ้นอยู่กับ policyTypeกรณีเป็น **ปช ที่สิ้นผล** และส่ง monthyear ทำข้อ 3.1กรณีเป็น **ปช ที่สิ้นผล** และไม่ส่ง monthyear ทำข้อ 3.2กรณีเป็น **ขพ. ที่สิ้นผล **และส่ง monthyear ทำข้อ 6.1กรณีเป็น **ขพ. ที่สิ้นผล **และไม่ส่ง monthyear ทำข้อ 6.2 |
| monthYear | string | format YYMM (พ.ศ.)YYYYMM (พ.ศ.) | 6412256611 | Optional | สำหรับกรณี inactiveถ้า period เป็น 202308monthYear = 6608 256608 |
| fistYearMonth | | format YYMM (พศ.) | 6505 | Optional | สำหรับกรณี lapseถ้า period เป็น 202308fistYearMonth = 6607endYearMonth = 6608 |
| endYearMonth | | format YYMM (พศ.) | 6507 | Optional | |

## Process

>
**1. ปช. INFORCE (0,1,2), REDUCE PAIDUP (6), FULLY PAIDUP (8)**

>

>
**2. ปช. LAPSE (7)**

>

>
**3.1 ปช ที่สิ้นผล DEATH (D), MATURITY (M), SURRENDER (S), DECLINE (C), RETURN (R), AUTO SURRENDER (A) และมีการส่งค่า monthYear**

>

>
**4. ขพ. INFORCE (0,1,2), REDUCE PAIDUP (6), FULLY PAIDUP (8)**

>

>
**5. ขพ. LAPSE (7)**

>

>
**6.1 ขพ. ที่สิ้นผล DEATH (D), MATURITY (M), SURRENDER (S), DECLINE (C), RETURN (R), AUTO SURRENDER (A) และมีการส่งค่า monthYear**

>

## Output

| Parameter Name | Description | Table | Field | Type | Size | |
| --- | --- | --- | --- | --- | --- | --- |
| PolicyNumber | เลขที่กรมธรรม์ | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBPOL#MXPOL#MSPOL# MBPOL#MXPOL# | CHAR | 8 | |
| PlanCode | รหัสแบบประกัน | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBPLANMXPLANMSPLANMBPLANMXPLAN | NUMERIC | (3,0) | |
| InitialSumInsured | จำนวนเอาเงินประกัน | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBSINSMXSINSMSSINSMBSINSMXSINS | DECIMAL | (7,0) | |
| InsuredDateofBirth | ทุนคุ้มครอง (ทุนประกันหลังที่เพิ่มตาม feature ของแบบประกัน) | [ILISLIB_CUSTMMC0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_CUSTMMC0)[GOVLIB_GCUSTMC0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GCUSTMC0) | MCBDD, MCBMM, MCBYY | INT_BE_YYYYMMDD_TO_DATE | | ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| InsuredIssueAge | อายุของผู้เอาประกัน ณ วันที่ออกกรมธรรม์ | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBIAGEMXIAGEMSIAGEMBIAGEMXIAGE | NUMERIC | (2,0) | |
| InsuredSex | เพศของผู้เอาประกัน | [ILISLIB_CUSTMMC0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_CUSTMMC0)[GOVLIB_GCUSTMC0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GCUSTMC0) | MCSEX | CHAR | 1 | |
| Med | Flag ตรวจสุขภาพ | ปช: [ILISLIB_APPINDMS](http://wiki.thaisamut.co.th/display/APP/ILISLIB_APPINDMS) | AMMDEX | CHAR | 1 | |
| Standard | EMR RATE | ปช: [ILISLIB_APPINDMS](http://wiki.thaisamut.co.th/display/APP/ILISLIB_APPINDMS) | AMEMRT | NUMERIC | (5,2) | |
| OcpCode | รหัสอาชีพ | [ILISLIB_CUSTMMC0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_CUSTMMC0)[GOVLIB_GCUSTMC0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GCUSTMC0) | MCOCCU | NUMERIC | (4,0) | |
| OcpClass | ชั้นอาชีพ (Single Occupation Class) | oasys.oapocclsPILLIB.OCCUPCL0 | OCCLAS | CHAR | 1 | |
| ModeOfPayment | Mode of Payment ณ. ปัจจุบัน (แปลงค่าใน query)12 คือ ราย 12 เดือน99 คือ Single Premium | [ILISLIB_POLCYDT0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYDT0)[GOVLIB_GPLCYDT0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYDT0) | PAYMOD | NUMERIC | 2 | |
| ModalPremium | เบี้ยประกันรายโหมด ณ ปัจจุบัน (Sum ใน Query) | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBPREMMXPREMMSPREMMBPREMMXPREM | DECIMAL | (5,0) | |
| premiumTerm | ระยะเวลาชำระเบี้ยประกันภัย | กรณีที่การชำระถึงเป็นแบบ คงที่ ([PILLIB_INSURPL0](http://wiki.thaisamut.co.th/display/APP/PILLIB_INSURPL0). PLPMT@ = 0)$ระยะเวลาชำระเบี้ย = [PILLIB_INSURPL0](http://wiki.thaisamut.co.th/display/APP/PILLIB_INSURPL0). PLPMTMกรณีที่การชำระถึงเป็นแบบ ชำระถึงอายุ(แบบคำนวนอายุ) ([PILLIB_INSURPL0](http://wiki.thaisamut.co.th/display/APP/PILLIB_INSURPL0).PLPMT@ = 1)ระยะเวลาชำระเบี้ย = $ระยะเวลาชำระเบี้ย - $อายุเริ่มต้นผู้เอาประกัน$อายุเริ่มต้นผู้เอาประกัน[ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0).MBIAGE[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0).MXIAGE[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0).MSIAGE[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0).MBIAGE[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0).MXIAGE | NUMERIC | (2,0) | | |
| coverageTerm | ระยะเวลาเอาประกัน | กรณีระยะเวลาคุ้มครองเป็นแบบคงที่ ([PILLIB_INSURPL0](http://wiki.thaisamut.co.th/display/APP/PILLIB_INSURPL0).PLCVT@ = 0)ระยะเวลาคุ้มครอง = [PILLIB_INSURPL0](http://wiki.thaisamut.co.th/display/APP/PILLIB_INSURPL0).PLCVTMกรณีที่ระยะเวลาคุ้มครองเป็นแบบชำระถึงอายุ (แบบคำนวนอายุ) ([PILLIB_INSURPL0](http://wiki.thaisamut.co.th/display/APP/PILLIB_INSURPL0).PLCVT@ = 1)ระยะเวลาคุ้มครอง = $ระยะเวลาคุ้มครอง - $อายุเริ่มต้นผู้เอาประกัน$อายุเริ่มต้นผู้เอาประกัน[ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0).MBIAGE[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0).MXIAGE[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0).MSIAGE[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0).MBIAGE[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0).MXIAGE | NUMERIC | (3,0) | | |
| EffectiveDate | วันที่เริ่มความคุ้มครอง | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBCDTEMXCDTEMSCDTEMBCDTEMXCDTE | INT_BE_YYYYMMDD_TO_DATE | | ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| IssueDate | วันที่รับรู้กรมธรรม์ | ilislib_polcyap0 | apptdt | INT_BE_DDMMYY_TO_DATE | | ต้นทาง: DDMMYY (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| MaturityDate | วันครบกำหนดสัญญา | [LISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBMDTEMXMDTEMSMDTEMBMDTEMXMDTE | INT_BE_YYYYMMDD_TO_DATE | | ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| SalesChannelcode | Sales Channel code 7 numeric digit in AS400 (ต่อ Text ใน Query) | [PILLIB_INSURPL0](http://wiki.thaisamut.co.th/display/APP/PILLIB_INSURPL0).PLCHNLหากเป็นรหัส 3 หลัก หรือเป็น 0 ให้นำ 207 ตามด้วยสาขาต้นสังกัด: [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0).MBBR#[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0).MXBR#[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0).MSBR#[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0).MBBR#[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0).MXBR# | NUMERIC | 7 | | |
| CurrentBasicPolicyStatus | สถานะกรมธรรม์ | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | mbstasmxstasmsstasmbstasmxstas | CHAR | 5 | |
| DisabilityFlag | สถานะทุพพลภาพ | ปช. CLMLIB.CLMRGCR1 หรือ ขพ. GOVLIB.GCMRGCR1วันที่รับเรื่อง CRRDTE มีสถานะ crcode = 'T'หากพบข้อมูลบันทึกเป็นสถานะทุพพลภาพ = 1 | CHAR | 1 | | |
| Installment | งวดชำระล่าสุด (ชำระครั้งสุดท้าย)Format: YYMM | [LISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0)[ILISLIB_POLCYMX0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMX0)[ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0)[GOVLIB_GPLCYMB0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMB0)[GOVLIB_GPLCYMX0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GPLCYMX0) | MBLSTPMXLSTPMSLSTPMBLSTPMXLSTP | NUMERIC | (4,0) | |
| currentPolicyStatusDate | วันที่เปลี่ยนเป็นสถานะปัจจุบัน | สถานะ INFORCE (0,1,2), FULLY PAIDUP (8)หากเคย Reinstate ใช้ [ILISLIB_REINSML0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_REINSML0).mlrdteหากไม่เคย Reinstate ใช้วันที่เริ่มสัญญา [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0).MBCDTEสถานะ R กรณีบอกล้างตาย หรือ DEATH (D) ใช้วันที่เสียชีวิต [CLMLIB_CLMRGCR0](http://wiki.thaisamut.co.th/display/APP/CLMLIB_CLMRGCR0)/[GOVLIB_GCMRGCR0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GCMRGCR0).CRADTEสถานะ M ใช้วันที่ครบกำหนดสัญญา [ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0).MSMDTEสถานะ S ใช้วันที่เวนคืน [ILISLIB_SURREMN0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_SURREMN0) / [GOVLIB_GSURRMN0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GSURRMN0).MNSDTEสถานะ R กรณีบอกล้างเป็น ใช้วันที่บริษัทอนุมัติบอกล้าง [ILISLIB_DECLNMR0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_DECLNMR0) / [GOVLIB_GDECLMR0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GDECLMR0).MRPDTE | INT_BE_YYYYMMDD_TO_DATE INT_BE_YYMMDD_TO_DATE | | [ILISLIB_POLCYMB0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMB0).MBCDTE, [ILISLIB_POLCYMS0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_POLCYMS0).MSMDTE ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.)[ILISLIB_REINSML0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_REINSML0).mlrdte, [CLMLIB_CLMRGCR0](http://wiki.thaisamut.co.th/display/APP/CLMLIB_CLMRGCR0)/ [GOVLIB_GCMRGCR0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GCMRGCR0).CRADTE, [ILISLIB_SURREMN0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_SURREMN0)/[GOVLIB_GSURRMN0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GSURRMN0).MNSDTE, [ILISLIB_DECLNMR0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_DECLNMR0) / [GOVLIB_GDECLMR0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GDECLMR0).MRPDTE ต้นทาง: YYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.)numeric_to_date_BE_yymmdd_nearest [4. Function transform data](http://wiki.thaisamut.co.th/display/IEA/4.+Function+transform+data) | |
| LoanIssueDate | วันเริ่มสัญญาเงินกู้ (Policy Loan) | [LOANLIB_LOANMV0](http://wiki.thaisamut.co.th/display/APP/LOANLIB_LOANMV0)LOANLIB.LOANMV1 | MVCDTEMVLDTE | INT_BE_YYYYMMDD_TO_DATE | | ต้นทาง: yymmdd (ปี พ.ศ.)YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| PreviousBasicPolicyStatus | สถานะกรมธรรม์ก่อนหน้าสถานะปัจจุบัน | OLIS.IOC0021P | IOPRES | CHAR | 1 | |
| ReinstateOldComDate | วันเริ่มสัญญาเดิมจากการ reinstate | [ILISLIB_SURREMN0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_SURREMN0)[GOVLIB_GSURRMN0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GSURRMN0) | MLOCOM | NUMERIC | 8 | ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| ReinstateNewComDate | วันเริ่มสัญญาใหม่จากการ reinstate | [ILISLIB_SURREMN0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_SURREMN0)[GOVLIB_GSURRMN0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GSURRMN0) | MLCDTE | NUMERIC | 8 | ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| AutoSurrenderDate | วันที่ขาดผลจาก Auto Surrender | [ILISLIB_SURREMA0](http://wiki.thaisamut.co.th/display/APP/ILISLIB_SURREMA0)[GOVLIB_GSURRMA0](http://wiki.thaisamut.co.th/display/APP/GOVLIB_GSURRMA0)[ ](http://wiki.thaisamut.co.th/display/APP/ILISLIB_SURREMA0) | MASDTE | NUMERIC | 8 | ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.) |
| DeathInProcessFlag | Flag การพิจารณาสินไหมชีวิต | [TABLE MASTER CLAIM : OLIS.OLPCLMCM](http://wiki.thaisamut.co.th/display/RCP2/TABLE+MASTER+CLAIM+%3A+OLIS.OLPCLMCM) | | CHAR | 1 | |
| DeathInProcessDate | วันที่เสียชีวิต | [TABLE MASTER CLAIM : OLIS.OLPCLMCM](http://wiki.thaisamut.co.th/display/RCP2/TABLE+MASTER+CLAIM+%3A+OLIS.OLPCLMCM) | CMRADT | INT_BE_YYYYMMDD_TO_DATE | | ต้นทาง: YYYYMMDD (พ.ศ.)แปลงค่า: YYYYMMDD (ค.ศ.)[numeric_to_date_BE_yymmdd_backward_only](http://wiki.thaisamut.co.th/display/IEA/4.+Function+transform+data) [4. Function transform data](http://wiki.thaisamut.co.th/display/IEA/4.+Function+transform+data) |

## Exception

## Example Input & Output

1.

>

```

```

>

```

```