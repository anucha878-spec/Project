# EDW-MPS-AM007 Template Automail แจ้งผลการส่งข้อมูลเข้าระบบ EDW

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=946143322
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
###### หน้าจอที่เกี่ยวข้อง

- [EDW-MPS-SD008 หน้าจอประมวลผล MPS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=918028352)

###### Description

| No. | Topic | Description | |
| --- | --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | สำหรับแจ้งสรุปผลการส่งข้อมูลเข้าระบบ EDW ประจำเดือน | |
| 2 | ผู้ใช้งาน (Target Users) | ฝ่ายคณิตศาสตร์ | |
| 3 | ข้อมูลที่ป้อนสู่ระบบ(Input) | ไฟล์นำเข้ากรมธรรม์พร้อม Tagging | |
| 4 | ข้อมูลที่ได้จากระบบ(Output) | Email รายงานผลสรุปผลการส่งข้อมูลเข้าระบบ EDW ประจำเดือน | |
| 5 | การกระทำกับหน้าจอ(Actions) | - | |
| 6 | อธิบายรายละเอียด(Description) | รายละเอียดของ Auto Email แจ้งผลการส่งข้อมูลเข้าระบบ EDW มีดังนี้ **รูปแบบ Auto Email ในระบบ** To | $emailRecipient |
| Subject | [EDW] แจ้งผลการส่งข้อมูลเข้าระบบ EDW ประจำเดือน $period | | |
| Text | เรียน ทีมคณิตศาสตร์, แจ้งผลการส่งข้อมูลเข้าระบบ EDW**ประจำเดือน:** $period**Shared Drive Folder:** $sharedDriveFolder **รายการข้อมูล** | **จำนวนรายการ** | **สถานะ** |
| I01 Main Policy Master GMM | $totalPolicy | $status | |
| I02 Rider Products Policy Master GMM | $totalPolicy | $status | |
| I03 PA Products Policy Master GMM | $totalPolicy | $status | |
| I04 Unit linked Products Policy Master VFA | $totalPolicy | $status | |
| I05 Group YRT Inforce Policy PAA | $totalPolicy | $status | |

อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ

ขอแสดงความนับถือ

#### ตัวแปร ที่เปลี่ยนตามข้อมูลในระบบ

| ตัวแปร | คำอธิบาย |
| --- | --- |
| $emailRecipient | ผู้รับอีเมลฝ่ายคณิตศาสตร์ โดยสามารถเพิ่มหรือลดสมาชิกภายใต้อีเมลกลุ่มได้ ดังนี้[porapol.li@ocean.co.th](mailto:porapol.li@ocean.co.th)[prapas.si@ocean.co.th](mailto:prapas.si@ocean.co.th)[passawon.wa@ocean.co.th](mailto:passawon.wa@ocean.co.th)[panupun.pl@ocean.co.th](mailto:panupun.pl@ocean.co.th)edw-accounting-dept[@ocean.co.th](mailto:panupun.pl@ocean.co.th) |
| $period | แสดงรอบการประมวลผลประจำเดือน ในรูปแบบ YYYY/MM รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี ค.ศ. แบบ 1999-9999 **พ.ศ. แบบ 2500-9999** |
| $totalPolicy | แสดงจำนวนกรมธรรม์ |
| $Status | แสดงสถานะของการประมวลผล ดังนี้สำเร็จไม่สำเร็จ |
| $sharedDriveFolder | แสดงชื่อของ Shared Drive Folder ในรูปแบบ YYYYMM รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี ค.ศ. แบบ 1999-9999 |

**ตัวอย่าง Auto Email ที่ได้รับกรณีระบบตรวจสอบข้อมูลไฟล์ เรียบร้อยแล้ว**

| To | | | |
| --- | --- | --- | --- |
| Subject | [EDW] แจ้งผลการส่งข้อมูลเข้าระบบ EDW ประจำเดือน 2565/12 | | |
| Text | [ ](mailto:piyawat.ju@ocean.co.th)เรียน ทีมคณิตศาสตร์,[ ](mailto:piyawat.ju@ocean.co.th) แจ้งผลการส่งข้อมูลเข้าระบบ EDW**ประจำเดือน:** 2565/12 **Shared Drive Folder:** 202212 **รายการข้อมูล** | **จำนวนรายการ** | **สถานะ** |
| I01 Main Policy Master GMM | 2,355 | สำเร็จ | |
| I02 Rider Products Policy Master GMM | 2,355 | สำเร็จ | |
| I03 PA Products Policy Master GMM | 2,355 | สำเร็จ | |
| I04 Unit linked Products Policy Master VFA | 2,355 | สำเร็จ | |
| I05 Group YRT Inforce Policy PAA | 2,355 | สำเร็จ | |

อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ

ขอแสดงความนับถือ