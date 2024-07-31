import sqlite3
import csv

# 데이터베이스 연결
conn = sqlite3.connect('site.db')
c = conn.cursor()

# 테이블 생성
c.execute('''
    CREATE TABLE IF NOT EXISTS sites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        link TEXT,
        review TEXT,
        site_id TEXT
    )
''')

# CSV 파일 읽기 및 데이터 삽입
with open('site.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    next(reader)  # 헤더 건너뛰기
    for row in reader:
        c.execute('''
            INSERT INTO sites (link, review, site_id)
            VALUES (?, ?, ?)
        ''', (row[0], "", ""))

# 변경사항 저장 및 데이터베이스 연결 종료
conn.commit()
conn.close()
print("Data has been inserted into the database.")
