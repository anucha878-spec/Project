# WS_EDW3_31 ดึงข้อมูลสินไหม claim จากระบบ CMS ( สาขา และ E-Claim ,Web Claim & API Web, Fax Claim)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1232175312
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-Overview) ] [ [Protocol](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-Protocol) ] [ [Operation](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-Operation) ] [ [Input](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-Input) ] [ [Process](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-Process) ] [ [Output](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-Output) ] [ [Exception](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-Exception) ] [ [Example Input & Output](#WS_EDW3_31ดึงข้อมูลสินไหมclaimจากระบบCMS(สาขาและE-Claim,WebClaim&APIWeb,FaxClaim)-ExampleInput&Output) ]

## Overview

1. นับรายการที่ตั้ง provision 2. นับรายการที่ approve แล้ว

## Protocol

>
Icon

## Operation

refer : [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)

ESB :

>
Icon

TYPE :

## Input

>

| Name | Type | Description | Example | Validation (Y/N) |
| --- | --- | --- | --- | --- |
| periodYYYYMM | numeric | ปีเดือนที่ทำรายการในรูปแบบ ค.ศ. 4 หลัก (yyyymm)ตัวอย่าง รอบประมวลผล 2023/11 ให้ระบุค่าเป็น 202311 | 202311 | |
| limit | numeric | limit | 100 | |
| offset | numeric | offset | 1 | |

## Process

>
**1. ข้อมูลสินไหม จากช่องทาง สาขา และ E-Claim**

สคริปเก่าก่อนมีการปรับแก้ขา provision เพื่อให้สอดคล้องกับสคริปต้นทางตาม jira ADW-13359

>

>

>
**2. ข้อมูลสินไหม จากช่องทาง Web Claim & API Web**

สคริปเก่าก่อนมีการปรับแก้ขา provision เพื่อให้สอดคล้องกับสคริปต้นทางตาม jira ADW-13359

>

>

>
**3. ข้อมูลสินไหม จากช่องทาง Fax Claim**

สคริปเก่าก่อนมีการปรับแก้ขา provision เพื่อให้สอดคล้องกับสคริปต้นทางตาม jira ADW-13359

>

>

## Output

| Parameter Name | Description | Table | Field | Type | Size | Example Source : BRANCH | Example Source : WEB & API | Example Source : FAX | Conversion |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| claim_no | เลขที่สินไหม | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | claim_no | CHAR | 25 | 6900/06-2567/00068-02 | 12-2566/00030 | 01-2568/00030-01 | DIRECT |
| policy_no | กรมธรรม์ | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | policy_no | CHAR | 20 | 1397581 | 1557946 | 2505592 | DIRECT |
| affliction_code | รหัสหมวดความคุ้มครอง | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | affliction_code | CHAR | 40 | CI_300000_Lethal_0101 | OPD04_Health01 | DABEXTRA_1500_0304 | DIRECT |
| policy_type | ประเภทกรมธรรม์ | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | policy_type | CHAR | 4 | ORD | ORD | ORD | DIRECT |
| rider_id | รหัสสัญญาเพิ่มเติม | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | rider_id | NUMERIC | 10 | 28 | 43 | 75 | DIRECT |
| benefit_stage | ระยะของโรค | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | benefit_stage | CHAR | 255 | disease | Invasive | Severe Critical Illness | DIRECT |
| benefit_abbr | ตัวย่อกลุ่มโรค | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | benefit_abbr | CHAR | 10 | CI02 | CB01 | CI06 | DIRECT |
| status_claim | สถานะสินไหม | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | status_claim | CHAR | 10 | AP | AP | AP | DIRECT |
| channel | ช่องทาง | [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim) | channel | CHAR | 20 | BRAN,ECLM | WCLM,TRUEH,I-CLAIM | FCLM | DIRECT |

## Exception

## Example Input & Output

1.

>

```

```

>

```

```