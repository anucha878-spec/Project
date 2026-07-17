# EDW-MPS-AM006 Template Automail แจ้งผลการนำเข้า Tagging File

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944832713
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
######

###### หน้าจอที่เกี่ยวข้อง

- [EDW-MPS-SD008 หน้าจอประมวลผล MPS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=918028352)

###### Description

| No. | Topic | Description | |
| --- | --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | สำหรับแจ้งสรุปผลการนำเข้า Tagging File ประจำเดือน | |
| 2 | ผู้ใช้งาน (Target Users) | ฝ่ายคณิตศาสตร์ | |
| 3 | ข้อมูลที่ป้อนสู่ระบบ(Input) | ไฟล์นำเข้า Tagging | |
| 4 | ข้อมูลที่ได้จากระบบ(Output) | Email รายงานผลสรุปผลการนำเข้า Tagging File ประจำเดือน | |
| 5 | การกระทำกับหน้าจอ(Actions) | - | |
| 6 | อธิบายรายละเอียด(Description) | รายละเอียด ของ Auto Email แจ้งผลการนำเข้า Tagging File มีดังนี้ **รูปแบบ Auto Email ในระบบ** To | $emailRecipient |
| Subject | [EDW] แจ้งผลการ Update ICG/RCG Tagging ประจำเดือน $period | | |
| Text | เรียน ทีมคณิตศาสตร์, แจ้งผลการ Update ICG/RCG Tagging**ประจำเดือน: **$period**Shared Drive Folder:** $sharedDriveFolder **รายการข้อมูล** | **จำนวนรายการ** | **สถานะ** |
| ICG Tagging by Policy (GMM/VFA Model) | $total | $Status | |
| RCG Tagging by Policy (GMM/VFA Model) | $total | $Status | |
| ICG/RCG Tagging by Policy (PAA Model) | $total | $Status | |

อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ

ขอแสดงความนับถือ

#### ตัวแปร ที่เปลี่ยนตามข้อมูลในระบบ

| ตัวแปร | คำอธิบาย |
| --- | --- |
| $emailRecipient | ผู้รับอีเมลฝ่ายคณิตศาสตร์ โดยสามารถเพิ่มหรือลดสมาชิกภายใต้อีเมลกลุ่มได้ ดังนี้[porapol.li@ocean.co.th](mailto:porapol.li@ocean.co.th)[prapas.si@ocean.co.th](mailto:prapas.si@ocean.co.th)[passawon.wa@ocean.co.th](mailto:passawon.wa@ocean.co.th)[panupun.pl@ocean.co.th](mailto:panupun.pl@ocean.co.th) |
| $period | แสดงรอบการประมวลผลประจำเดือน ในรูปแบบ YYYY/MM รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี ค.ศ. แบบ 1999-9999 **พ.ศ. แบบ 2500-9999** |
| $totalPolicy | แสดงจำนวนกรมธรรม์ |
| $Status | แสดงสถานะของการประมวลผล ดังนี้สำเร็จไม่สำเร็จ |
| $sharedDriveFolder | แสดงชื่อของ Shared Drive Folder ในรูปแบบ YYYYMM รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี ค.ศ. แบบ 1999-9999 |

**ตัวอย่าง Auto Email ที่ได้รับกรณีระบบตรวจสอบข้อมูลไฟล์ เรียบร้อยแล้ว**

| To | | | |
| --- | --- | --- | --- |
| Subject | [EDW] แจ้งผลการ Update ICG/RCG Tagging ประจำเดือน 2565/12 | | |
| Text | [ ](mailto:piyawat.ju@ocean.co.th)เรียน ทีมคณิตศาสตร์,[ ](mailto:piyawat.ju@ocean.co.th) แจ้งผลการ Update ICG/RCG Tagging**ประจำเดือน: **2565/12**Shared Drive Folder:** 202212 **ประเภทกรมธรรม์** | **จำนวนรายการ** | **สถานะ** |
| ICG Tagging by Policy (GMM/VFA Model) | 150,000 | สำเร็จ | |
| RCG Tagging by Policy (GMM/VFA Model) | 150,000 | สำเร็จ | |
| ICG/RCG Tagging by Policy (PAA Model) | 110,000 | สำเร็จ | |

อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ

ขอแสดงความนับถือ