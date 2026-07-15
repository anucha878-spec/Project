# WS_RI_00 ดึงข้อมูล Base Plan Code และ Rider Code ทุกประเภท

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1110475012  
> **Page ID:** 1110475012  
> **Path:** Home / Current Version / 06. External Service Call Specification / WS_RI_00 ดึงข้อมูล Base Plan Code และ Rider Code ทุกประเภท

---

[
Overview
] [
Protocol
] [
Operation
] [
Input
] [
Process
] [
Output
] [
Exception
]

## Overview

<ดึงข้อมูล Base Plan Code และ Rider Code ทุกประเภท (All Product) จาก AS400>

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)

Icon
TYPE : <inquiry,bulk,delete,update,add>

<ชื่อ operation>

## Input

<->

## Process

## Output

<แสดงข้อมูลที่ได้รับจาก external service นี้>

| No. | Name | Type | Size | Description | Lib.Table.Field | Example | Remark |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | policyType | Varchar | 10 | ประเภทกรมธรรม์ |  | ORDPAULIND |  |
| 2 | productGroup | Varchar | 10 | กลุ่มกรมธรรม์ |  | BASERIDER |  |
| 3 | shortName | Varchar | 30 | ชื่อย่อกรมธรรม์ | OLIS.OLPRIDER.RDABN2 | CPAHB2AD&DD&DB |  |
| 4 | riderType | Varchar | 1 | ประเภท RIDER | OLIS.OLPRIDER.RDTYPE | AHO |  |
| 5 | policyCoverage | Varchar | 10 | ประเภทความคุ้มครองของกรมธรรม์ |  | LIFEADDTPDTTDRIDER |  |
| 6 | planCode | Varchar | 10 | รหัสกรมธรรม์ | OLIS.OLPPLNTB.PLAN@OLIS.OLPRIDER.RD@PPALIB.TBPLAN.PLNIDPPALIB.PARIDPLN.RDPIDPILLIB.INSURPL0.PLPLANGWLIB.TBRIDPLN.RIDIDULLIB.CPDPRD01.PDCDVC | G28G29G30123 |  |
| 7 | productName | Varchar | 255 | ชื่อกรมธรรม์ | OLIS.OLPPLNTB.PLNAM1OLIS.OLPRIDER.RDNAMEPPALIB.TBPLAN.PLNDESPPALIB.PARIDPLN.RDPNAMPILLIB.INSURPL0.PLNAMEGWLIB.TBRIDPLN.RIDNAMULLIB.CPDPRD01.PDNMVC | คุ้มทรัพย์ 2คุ้มครองอุบัติเหตุส่วนบุคคลพิเศษคุ้มครองการรักษาพยาบาลในโรงพยาบาลพิเศษคุ้มครองอุบัติเหตุส่วนบุคคล |  |
| 8 | covYear | Numeric | 3 | ระยะเวลาความคุ้มครอง | OLIS.OLPPLNTB.PLCVTM | 1 |  |
| 9 | payYear | Numeric | 2 | ระยะเวลาชำระเบี้ย | OLIS.OLPPLNTB.PLPMTM | 1 |  |
| 10 | coditionCovyear | Numeric | 2 | เงื่อนไขการนำระยะเวลาความคุ้มครองไปใช้ | OLIS.OLPPLNTB.PLCVT@ | 1 |  |
| 11 | coditionPayyear | Numeric | 2 | เงื่อนไขการนำระยะเวลาชำระเบี้ยไปใช้ | OLIS.OLPPLNTB.PLPMT@ | 0 |  |

## Exception

<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>
