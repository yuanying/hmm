#!/usr/bin/env ruby
require 'takarabako'
require 'gimei'
require 'json'

movies = []
thumbnails = ['./imgs/img.jpg', './imgs/notfound.jpg']

def actors
  x = rand(10)
  if (0..6).include? x
    return [Gimei.female.kanji]
  elsif (7..8).include? x
    return [Gimei.female.kanji, Gimei.female.kanji]
  else
    return Array.new(rand(6)) { Gimei.female.kanji }
  end
end

(10000...10100).each do |t|
  m = {}
  movies << m
  m['id'] = t.to_s
  m['thumbnail'] = thumbnails[rand(2)]
  m['local_image'] = m['thumbnail']
  m['title'] = Takarabako.open
  m['url'] = 'http://test.example.com/original.html'
  m['date'] = '2015-12-11'
  m['actors'] = actors()
  m['movie'] = 'http://test.example.com/test.mp4'
  m['local_movie'] = m['movie']
end

puts 'var movies = ' + JSON.pretty_generate(movies) + ';'
